#!/usr/bin/env sh

mv geojson/pending-permits.geojson geojson/pending-permits_$(date +%Y-%m-%d --date="7 days ago").geojson && mv geojson/approved-permits.geojson geojson/approved-permits_$(date +%Y-%m-%d --date="7 days ago").geojson
curl -o pending.zip https://cogcc.state.co.us/documents/data/downloads/gis/PERMITS_PENDING_SHP.ZIP
curl -o approved.zip https://cogcc.state.co.us/documents/data/downloads/gis/PERMITS_SHP.ZIP
unzip pending.zip && unzip approved.zip
mapshaper Permits_Pending.shp -proj wgs84 -filter-fields Recv_Date,Oper_Name,Doc_Num -o format=geojson geojson/pending-permits.geojson
mapshaper Permits.shp -proj wgs84 -filter-fields Operator,Perm_Appr,Perm_Exp,API -o format=geojson geojson/approved-permits.geojson
rm *.zip && rm Permits*
ftp -s:ftp-geojson-files.txt

