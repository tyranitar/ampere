pkg load sockets;

args = argv();

cd(args{1});
port = str2num(args{2});
bufferSize = str2num(args{3});

s = socket();
bind(s, port);
listen(s, 0);

client = accept(s);

while true
    [buffer, count] = recv(client, bufferSize);

    if count > 0
        try
            % Service logic.
            msg = 'Hello, World!';
            send(client, msg);
        catch err
            disp(err.message);
            send(client, err.message);
        end
    else
        % Client disconnected.
        break;
    end
end