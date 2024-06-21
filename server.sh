#!/bin/bash
port=8000

# Example value for demonstration. Ensure $port is set correctly in your script.
$port = 0

# Debugging: Output the current value of $port
Write-Host "Current port value: $port"

# Validate $port is within the valid range
if ($port -le 0 -or $port -gt 65535) {
    Write-Host "Invalid port number. Please set the port to a value between 1 and 65535."
    # Optionally, set $port to a default valid value or prompt for a new one
    # $port = Read-Host "Please enter a valid port number"
    # Or set a default port
    # $port = 8080
    exit
}

# If $port is valid, proceed with the Test-NetConnection command
Test-NetConnection -ComputerName localhost -Port $port -InformationLevel Detailed


# check if the port is open if not start the server
if nc -z localhost $port; then
    echo "Server is running on port $port"
else
    echo "Server is not running"
fi

#check if the port is in use if not start the server
if ! nc -z localhost $port; then
    echo "Server is running on port $port"
else
    echo "Server is not running"
fi

if [ $? -eq 0 ]; then
    echo "Server is running on port $port"
else
    echo "Server is not running"
fi

# check if server is running
if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null ; then
    echo "Server is running on port $port"
else
    echo "Server is not running"
fi

# Function to check if the port is in use
function check_port {
    if nc -z localhost $port; then
        echo "Port $port is in use"
        return 0
    else
        echo "Port $port is not in use"
        return 1
    fi
}


# create a function to check if the server is running
function check_server {
    if nc -z localhost $port; then
        echo "Server is running on port $port"
        return 0
    else
        echo "Server is not running"
        return 1
    fi
}
# call the function
check_server
return_value=$?
echo "Return value of check_server function: $return_value"

# run the server
function run_server {
    #python -m SimpleHTTPServer $port
    python -m htttp.server $port
}
# call the function
run_server
return_value=$?
echo "Return value of run_server function: $return_value"
