# Test script to verify cache headers
Write-Host "Testing cache headers for Trivexa website..." -ForegroundColor Green

try {
    $response = Invoke-WebRequest -Uri "https://trivexatechnologies.com" -Method Head -UseBasicParsing
    
    Write-Host "`nResponse Headers:" -ForegroundColor Yellow
    Write-Host "=================" -ForegroundColor Yellow
    
    # Check for key cache-related headers
    $cacheHeaders = @(
        "x-nextjs-cache",
        "cache-control", 
        "etag",
        "last-modified"
    )
    
    foreach ($header in $cacheHeaders) {
        $value = $response.Headers[$header]
        if ($value) {
            Write-Host "$header`: $value" -ForegroundColor Cyan
        } else {
            Write-Host "$header`: Not found" -ForegroundColor Gray
        }
    }
    
    Write-Host "`nStatus Code: $($response.StatusCode)" -ForegroundColor Green
    
    # Check if we have the desired cache behavior
    $nextjsCache = $response.Headers["x-nextjs-cache"]
    $cacheControl = $response.Headers["cache-control"]
    
    Write-Host "`nCache Analysis:" -ForegroundColor Yellow
    Write-Host "===============" -ForegroundColor Yellow
    
    if ($nextjsCache -eq "MISS") {
        Write-Host "✅ x-nextjs-cache: MISS (Good - no internal caching)" -ForegroundColor Green
    } elseif ($nextjsCache -eq "HIT") {
        Write-Host "❌ x-nextjs-cache: HIT (Still cached internally)" -ForegroundColor Red
    } else {
        Write-Host "⚠️  x-nextjs-cache: $nextjsCache" -ForegroundColor Yellow
    }
    
    if ($cacheControl -match "no-cache") {
        Write-Host "✅ cache-control: Contains no-cache (Good)" -ForegroundColor Green
    } else {
        Write-Host "❌ cache-control: $cacheControl (May still be cached)" -ForegroundColor Red
    }
    
} catch {
    Write-Host "Error testing headers: $($_.Exception.Message)" -ForegroundColor Red
}
