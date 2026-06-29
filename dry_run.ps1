$srcDir = "C:\Users\user\Desktop\ai사무자동화\예제파일\06_어질러진_바탕화면"
$destBase = "C:\Users\user\Desktop\연습장2"

$results = Get-ChildItem -Path $srcDir -File | ForEach-Object {
    $month = $_.LastWriteTime.Month
    [PSCustomObject]@{
        "FileName"      = $_.Name
        "LastWriteTime" = $_.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
        "DestFolder"    = "${month}월"
    }
}

$results | Format-Table -AutoSize
