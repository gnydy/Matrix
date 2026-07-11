$chromePaths = @("C:\Program Files\Google\Chrome\Application\chrome.exe", "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe")
$chrome = $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1
for ($port=3001; $port -le 3020; $port++) { $url = "http://localhost:$port"; if ($chrome) { Start-Process $chrome $url } else { Start-Process $url } }
