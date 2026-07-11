$name = Split-Path -Leaf (Get-Location)
Compress-Archive -Path .\* -DestinationPath ..\$name.zip -Force
