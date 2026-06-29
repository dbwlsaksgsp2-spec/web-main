$srcDir = "C:\Users\user\Desktop\ai사무자동화\예제파일\06_어질러진_바탕화면"
$destBase = "C:\Users\user\Desktop\연습장2"

Write-Host "📂 파일 분류 및 복사를 시작합니다..." -ForegroundColor Cyan

$count = 0
Get-ChildItem -Path $srcDir -File | ForEach-Object {
    $month = $_.LastWriteTime.Month
    $destFolder = Join-Path $destBase "${month}월"
    
    if (-not (Test-Path $destFolder)) {
        New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
    }
    
    $destPath = Join-Path $destFolder $_.Name
    Copy-Item -Path $_.FullName -Destination $destPath -Force
    $count++
    Write-Host "✅ [복사 완료] $_.Name ➔ ${month}월" -ForegroundColor Green
}

Write-Host "🎉 총 $count개의 파일이 성공적으로 분류 및 복사되었습니다!" -ForegroundColor Cyan
