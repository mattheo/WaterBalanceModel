
file = open("echteDatenTEST.csv", "r")
newfile = open("neueDatenTEST.html", "w")

newfile.write('<table id="maintable" class="show" border="1">\n')

line = file.readline()
line = line.strip()
cells = line.split(";")

newfile.write('<tr id="headline"><th id="hdate">date</th><th id="hprecipitation">precipitation</th><th id="htemperature">temperature</th><th id="hhumidity">relative humidity</th><th id="hvelocity">velocity</th></tr>')

i = 0

for line in file:
    i = i + 1
    line = line.strip()
    cells = line.split(";")
    newfile.write('\n')
    newfile.write('<tr id="row' + str(i) + '">\n')
    newfile.write('    <td id="date">' + str(cells[0]) + '</td>\n')
    newfile.write('    <td id="precipitation">' + str(cells[1]) + '</td>\n')
    newfile.write('    <td id="temperature">' + str(cells[2]) + '</td>\n')
    newfile.write('    <td id="humidity">' + str(cells[3]) + '</td>\n')
    newfile.write('    <td id="velocity">' + str(cells[4]) + '</td>\n')
    newfile.write('</tr>\n')

newfile.write('</table>')

newfile.close()
file.close()
