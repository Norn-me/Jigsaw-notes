Add-Type -AssemblyName System.Drawing

function Make-Icon {
    param([int]$size, [string]$path)

    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = 'AntiAlias'
    $g.TextRenderingHint = 'AntiAlias'

    # Dark background
    $bgColor = [System.Drawing.Color]::FromArgb(15, 15, 19)
    $g.Clear($bgColor)

    # Gradient circle
    $cx = [int]($size / 2)
    $cy = [int]($size * 0.43)
    $r  = [int]($size * 0.32)
    $rect = New-Object System.Drawing.Rectangle(($cx - $r), ($cy - $r), ($r * 2), ($r * 2))

    $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $rect,
        [System.Drawing.Color]::FromArgb(110, 159, 255),
        [System.Drawing.Color]::FromArgb(255, 126, 179),
        45
    )
    $g.FillEllipse($brush, $rect)

    # "Q" letter centered in circle
    $fontSize = [float]($size * 0.3)
    $font = New-Object System.Drawing.Font('Segoe UI', $fontSize, [System.Drawing.FontStyle]::Bold)
    $sf = New-Object System.Drawing.StringFormat
    $sf.Alignment = 'Center'
    $sf.LineAlignment = 'Center'
    $textRect = New-Object System.Drawing.RectangleF([float]($cx - $r), [float]($cy - $r), [float]($r * 2), [float]($r * 2))
    $g.DrawString('Q', $font, [System.Drawing.Brushes]::White, $textRect, $sf)

    # Save
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    $brush.Dispose()
    $font.Dispose()
    Write-Host "Created $path ($size x $size)"
}

Make-Icon -size 192 -path 'D:\quicknotes\icon-192.png'
Make-Icon -size 512 -path 'D:\quicknotes\icon-512.png'
