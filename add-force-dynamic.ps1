# 🚀 Add force-dynamic to all Next.js pages
# This script adds 'export const dynamic = 'force-dynamic'' to all page.tsx files

Write-Host "Adding force-dynamic to all Next.js pages..." -ForegroundColor Red

# Get all page.tsx files
$pageFiles = Get-ChildItem -Path "app" -Recurse -Name "page.tsx"

$processed = 0
$skipped = 0

foreach ($file in $pageFiles) {
    $fullPath = "app\$file"
    Write-Host "Processing: $fullPath" -ForegroundColor Yellow
    
    # Read the file content
    $content = Get-Content -Path $fullPath -Raw
    
    # Check if force-dynamic is already present
    if ($content -match "export const dynamic = 'force-dynamic'") {
        Write-Host "  Already has force-dynamic" -ForegroundColor Green
        $skipped++
        continue
    }
    
    # Check if it's a client component
    if ($content -match "'use client'") {
        Write-Host "  Skipping client component (portfolio page)" -ForegroundColor Yellow
        $skipped++
        continue
    }
    
    # Find the first import statement
    $lines = $content -split "`n"
    $insertIndex = -1
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i] -match "^import.*from") {
            $insertIndex = $i + 1
            break
        }
    }
    
    if ($insertIndex -eq -1) {
        Write-Host "  No import statements found" -ForegroundColor Red
        continue
    }
    
    # Insert the force-dynamic export after the first import
    $newLines = @()
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $newLines += $lines[$i]
        if ($i -eq $insertIndex - 1) {
            $newLines += ""
            $newLines += "export const dynamic = 'force-dynamic'"
        }
    }
    
    # Write the updated content back to the file
    $newContent = $newLines -join "`n"
    Set-Content -Path $fullPath -Value $newContent -NoNewline
    
    Write-Host "  Added force-dynamic" -ForegroundColor Green
    $processed++
}

Write-Host "`nForce-dynamic addition complete!" -ForegroundColor Green
Write-Host "Processed: $processed files" -ForegroundColor Cyan
Write-Host "Skipped: $skipped files" -ForegroundColor Cyan
Write-Host "`nNext steps:" -ForegroundColor White
Write-Host "1. Run: npm run build" -ForegroundColor White
Write-Host "2. Run: pm2 restart trivexa-website --update-env" -ForegroundColor White
Write-Host "3. Test: curl -I https://trivexatechnologies.com" -ForegroundColor White
