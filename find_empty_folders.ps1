$parent = Get-ChildItem -Path $PSScriptRoot -Directory | Where-Object { $_.Name.Length -eq 4 } | Select-Object -First 1
$sub1 = Get-ChildItem -Path $parent.FullName -Directory | Where-Object { $_.Name -like "07_*" } | Select-Object -First 1
$targetDir = Get-ChildItem -Path $sub1.FullName -Directory | Where-Object { $_.Name -like "05_*" } | Select-Object -First 1

Write-Host "Scanning target: $($targetDir.FullName)"
$emptyFolders = Get-ChildItem -Path $targetDir.FullName -Recurse -Directory | ForEach-Object {
    $items = Get-ChildItem -Path $_.FullName -Force
    if ($null -eq $items -or $items.Count -eq 0) {
        Write-Host "Empty folder: $($_.Name)"
    }
}
