$name = Split-Path -Leaf (Get-Location)
Compress-Archive -Path .\* -DestinationPath ..\zips\$name.zip -Force
