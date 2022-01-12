import json
import datapackage

zipcodes_url = 'colorado-zip-codes-geojson.json'
hoods_url = 'hottest-hoods.json'

zipcodes_dp = datapackage.Package(zipcodes_url)
hoods_dp = datapackage.Package(hoods_url)

merged = json.loads(zipcodes_dp.get_resource('zipcodes').raw_read().decode('UTF-8'))
for feature in merged['features']:
    matches = [hoods['zipCode'] for hoods in hoods_dp.resources[0].data if hoods['zipCode'] == feature['properties']['GEOID10']]
    # if matches:
    #     feature['properties']['GDP (2014)'] = float(matches[0])
    # else:
    #     feature['properties']['GDP (2014)'] = 0
new_dp = datapackage.Package()
new_dp.descriptor['name'] = 'consolidated-dataset'
new_dp.descriptor['resources'] = [
  {
    'name': 'data',
    'path': 'world_gdp_2014.geojson'
  }
]
new_dp.commit()
new_dp.save('datapackage.zip')