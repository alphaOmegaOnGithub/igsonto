"#!/bin/bash
sudo route delete default gw 192.168.221.253
sudo route add default gw 192.168.221.251
sudo route del -host 129.69.211.1
sudo route add -host 129.69.211.1 gw 192.168.221.251