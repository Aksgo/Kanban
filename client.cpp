#include <winsock2.h>
#include <ws2tcpip.h>
#include <iostream>
#pragma comment(lib, "ws2_32.lib")

using namespace std;

int main(){
    SOCKET clientSocket;
    int port = 55555;
    //loading dll file to create sockets
    WSADATA wsaData;
    int wsaerr;
    WORD wVersionRequested = MAKEWORD(2,2);
    wsaerr = WSAStartup(wVersionRequested, &wsaData);
    if(wsaerr!=0){
        cout<<"Winsock dll not found"<<endl;
        return 0;
    }else{
        cout<<"Winsock dll found"<<endl;
        cout<<"The status : "<<wsaData.szSystemStatus<<endl;
    }

    //client socket setup
    clientSocket = INVALID_SOCKET;
    clientSocket = socket(2,1,6);
    if(clientSocket == INVALID_SOCKET){
        cout<<"Error at socket() :"<<WSAGetLastError()<<endl;
        WSACleanup();
        return 0;
    }else{
        cout<<"Socket is OK()"<<endl;
    }

    //connect to server
    sockaddr_in clientService;
    clientService.sin_family = AF_INET;
    clientService.sin_addr.s_addr = inet_addr("");
    clientService.sin_port = htons(port);
    if(connect(clientSocket, (SOCKADDR*)&clientService, sizeof(clientService))==SOCKET_ERROR){
        cout<<"Client: conenct() - failed to connect :"<<WSAGetLastError()<<endl;
        WSACleanup();
        return 0;
    }else{
        cout<<"Client: connect() OK"<<endl;
        cout<<"Client: Can transfer data"<<endl;
    }
    system("pause");
    WSACleanup();
    return 0;
}