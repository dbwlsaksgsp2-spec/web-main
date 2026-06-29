$srcDir = "C:\Users\user\Desktop\ai사무자동화\예제파일\07_파일관리_실습\04_백업_대상"
$dateStr = Get-Date -Format "yyyyMMdd"
$backupFolderName = "백업_$dateStr"
$backupDir = Join-Path $srcDir $backupFolderName
$zipFile = Join-Path $srcDir "$backupFolderName.zip"

Write-Host "📂 백업 폴더 생성 중: $backupFolderName" -ForegroundColor Cyan
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir -Force | Out-Null
}

Write-Host "🔍 엑셀 및 CSV 파일 검색 및 복사 중..." -ForegroundColor Cyan
$copiedFiles = Get-ChildItem -Path $srcDir -File | Where-Object {
    $_.Extension -match "^\.(xlsx|xls|csv)$"
} | ForEach-Object {
    $destPath = Join-Path $backupDir $_.Name
    Copy-Item -Path $_.FullName -Destination $destPath -Force
    Write-Host "  ✅ 복사 완료: $_.Name" -ForegroundColor Green
    $_.Name
}

Write-Host "🤐 백업 폴더 압축 중..." -ForegroundColor Cyan
if (Test-Path $zipFile) {
    Remove-Item -Path $zipFile -Force
}
Compress-Archive -Path $backupDir -DestinationPath $zipFile -Force

Write-Host "🎉 백업 및 압축 완료!" -ForegroundColor Green
Write-Host "📁 백업 폴더 경로: $backupDir" -ForegroundColor Cyan
Write-Host "📦 압축 파일 경로: $zipFile" -ForegroundColor Cyan
