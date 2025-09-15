# 定义一个函数来运行脚本
function New-Script {
    param($command)
    # 在后台运行命令
    Start-Process -NoNewWindow -FilePath "powershell" -ArgumentList "-Command", $command
}

# 开始运行脚本
New-Script "tsc -w -p tsconfig.compile.json"
New-Script "tsc-alias -w -p tsconfig.compile.json"