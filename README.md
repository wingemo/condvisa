# condvisa
<p align="center">
Clients connect to the server and tell their phone numbers, <br> and the server saves those in a data structure. 
</p>

```mermaid
graph TD;
    id1[CLIENT 1]-. CONNECT .->SERVER;
    id2[CLIENT 2]-. CONNECT .->SERVER;
    id3[CLIENT 3]-. CONNECT .->SERVER;
    id4[CLIENT 2]-. CONNECT .->SERVER;
    id5[CLIENT 3]-. CONNECT .->SERVER;
```

<p align="center">
Client 1 sends a payment request to the server with the phone numbers, <br> and the server searches for those phone numbers and sends them the payment request.
</p>

```mermaid
graph TD;
    id1[CLIENT 1]-. REQUEST .->SERVER;
    SERVER-. REQUEST .->id2[CLIENT 2];
    SERVER-. REQUEST .->id3[CLIENT 3];
```

```mermaid
graph TD;
    id2[CLIENT 2]-. ACKNOWLEDGE .->SERVER;
    id3[CLIENT 3]-. ACKNOWLEDGE .->SERVER;
    SERVER-. ACKNOWLEDGE .->id1[CLIENT 1];
```
