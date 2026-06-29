$srcDir = "C:\Users\user\Desktop\ai사무자동화\예제파일\06_어질러진_바탕화면"
$backupDir = Join-Path $srcDir "백업"
$reportFile = Join-Path $srcDir "보고서_취합_결과.md"

Write-Host "📂 백업 폴더를 생성하는 중..." -ForegroundColor Cyan
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

Write-Host "📂 대상 파일 복사(백업) 중..." -ForegroundColor Cyan
Copy-Item -Path (Join-Path $srcDir "보고서_최종_진짜최종.pdf") -Destination $backupDir -Force
Copy-Item -Path (Join-Path $srcDir "오늘_할일.txt") -Destination $backupDir -Force

Write-Host "📄 취합 보고서를 생성하는 중..." -ForegroundColor Cyan

$reportContent = @"
# 📄 '보고서' 관련 파일 취합 및 검색 결과 보고서

> **작성일:** $(Get-Date -Format "yyyy년 MM월 dd일 HH:mm:ss")  
> **검색 대상 폴더:** [06_어질러진_바탕화면](file:///c:/Users/user/Desktop/ai사무자동화/예제파일/06_어질러진_바탕화면)  
> **검색 조건:** 파일명 또는 내용에 '보고서' 단어 포함  

---

## 📦 1. 백업 완료 파일 상세 정보
원본 파일은 안전하게 보존되었으며, 하위 백업 폴더로 복사가 완료되었습니다.

- **백업 저장소:** [백업 폴더](file:///c:/Users/user/Desktop/ai사무자동화/예제파일/06_어질러진_바탕화면/백업)

| 파일명 | 파일 크기 | 마지막 수정일 | 구분 |
| :--- | :---: | :---: | :--- |
| [보고서_최종_진짜최종.pdf](file:///c:/Users/user/Desktop/ai사무자동화/예제파일/06_어질러진_바탕화면/백업/보고서_최종_진짜최종.pdf) | 65,005 Bytes | 2026-06-16 | 파일명 매칭 |
| [오늘_할일.txt](file:///c:/Users/user/Desktop/ai사무자동화/예제파일/06_어질러진_바탕화면/백업/오늘_할일.txt) | 60 Bytes | 2026-06-16 | 내용 매칭 |

---

## 🔍 2. 파일별 추출 내용 요약

### ① 오늘_할일.txt
```text
□ 보고서 제출
□ 회의 준비
□ 메일 회신
```

### ② 보고서_최종_진짜최종.pdf (OCR 추출 텍스트)
#### **[사무 자동화 추진 사업 보고서]**
- **추진 배경:** 온라인 사무 자동화 도입 확산에 따른 반복 업무 자동화로 생산성 향상 도모. 핵심 과제는 문서 작성/정리/보고서 제작 시간 단축.
- **현황 분석:** 단순 반복 작업이 전체 업무의 약 35% 차지.
- **개선 방안:** ① AI 문서 초안 자동 생성, ② 파일 정리/변환 자동화, ③ 템플릿 표준화.
- **기대 효과:** 연간 약 1,200시간의 업무 시간 절감 예상.
- **도입 효과 분석표:**
  - 문서 작성: 8시간 ➔ 3시간 (62% 절감)
  - 자료 정리: 5시간 ➔ 1시간 (80% 절감)
  - 보고서 제작: 6시간 ➔ 2시간 (67% 절감)
"@

$reportContent | Out-File -FilePath $reportFile -Encoding utf8 -Force
Write-Host "✅ 백업 및 보고서 파일 생성 완료!" -ForegroundColor Green
