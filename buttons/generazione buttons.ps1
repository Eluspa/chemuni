$template = 'C:\Users\PC-UCNET\Documents\GitHub\chemuni\buttons\buttontemplate.txt'
$newpath = 'C:\Users\PC-UCNET\Documents\GitHub\chemuni\buttons\buttons.txt'
$contenuto = Get-Content -Path $template

$folder = 'red'

$img = 'C:\Users\PC-UCNET\Documents\GitHub\chemuni\img\'
$imgfolders = Get-ChildItem -Path $img

Remove-Item $newpath

for($i=1; $i -le 30;$i++)
{
    $contenuto -replace '@', $i -creplace 'FOLDER', $folder | Add-Content -Path $newpath
}

foreach ($imgfld in $imgfolders)
{
    New-Item -ItemType Directory -Name $folder -Path ($img + $imgfld)
}


pause