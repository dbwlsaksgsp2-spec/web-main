import pandas as pd

# Load the original file
file_path = r"c:\Users\user\Desktop\ai사무자동화\예제파일\12_발표_프롬프트_실습\02_발표_재료\월별매출.csv"
df = pd.read_csv(file_path)

# Aggregate data by product
# We need: 총매출 (Total sales), 월평균 (Monthly average), 최고 월 (Highest month), 최저 월 (Lowest month)
grouped = df.groupby('제품')

result_data = []
for name, group in grouped:
    total_sales = group['매출액'].sum()
    avg_sales = group['매출액'].mean()
    
    # Highest month
    highest_row = group.loc[group['매출액'].idxmax()]
    highest_month = f"{highest_row['월']} ({highest_row['매출액']:,}원)"
    
    # Lowest month (handling ties if any, though we can just select the min/all mins)
    min_val = group['매출액'].min()
    lowest_months = group[group['매출액'] == min_val]['월'].tolist()
    lowest_month_str = ", ".join(lowest_months) + f" ({min_val:,}원)"
    
    result_data.append({
        '제품': name,
        '총매출액': total_sales,
        '월평균매출액': avg_sales,
        '최고매출월': highest_month,
        '최저매출월': lowest_month_str
    })

result_df = pd.DataFrame(result_data)

# Reorder products to a logical order (Basic, Premium, Enterprise)
category_order = ['베이직', '프리미엄', '엔터프라이즈']
result_df['제품'] = pd.Categorical(result_df['제품'], categories=category_order, ordered=True)
result_df = result_df.sort_values('제품').reset_index(drop=True)

# Format currency values for display in output CSV/Excel if needed or keep numeric.
# Keep numeric for calculations, but let's save a clean CSV.
output_path = r"c:\Users\user\Desktop\ai사무자동화\예제파일\12_발표_프롬프트_실습\02_발표_재료\제품별_매출_집계.csv"
result_df.to_csv(output_path, index=False, encoding='utf-8-sig')

print("Aggregation completed successfully!")
print(result_df)
