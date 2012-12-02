

function calcVapourPressure (airTemperature, airPressure) { //[°C] [hPa]
	/**Returns an object with
	*/

	if (typeof airPressure === "undefined")
		(airPressure = 1013.15);
	// if no value has been passed to the function it sets the air pressure to a defualt of 1013.15 hPa


	var satVapourPressurePure = 6.12 * Math.exp((17.62 * airTemperature) / (243.12 + airTemperature));
		/* Calculates the saturated vapour pressure (es) as a function to temperature over the pure phase meaning that only water and water vapour are present in the system.
		returns [hPa] */


	var p = 1.0016 + 3.15 * Math.pow(10, -6) * airPressure - 0.074 / airPressure;
		/* p is a coefficient to adjust the saturated vapour pressure over the pure phase to the actual saturated vapour pressure in moist air. It is a function to air pressure and is intended for pressures around 1013 hPa.
		returns [hPa] */

	var satVapourPressure = satVapourPressurePure * p;
		/* Calculates the saturated vapour pressure (e's) in moist air through p.
		returns [hPa] */

	var satVapourPressureSlope = ((4283.7744 * satVapourPressure) / Math.pow(243.12 + airTemperature, 2));
		/* Calulates the slope or gradient of e's at the corresponing air temperature.
		returns [°C/hPa] */

	var object = {
		"satVapourPressurePure":  satVapourPressurePure,
		"p": p,
		"satVapourPressure": satVapourPressure,
		"satVapourPressureSlope": satVapourPressureSlope
	};
		/*write all calculated values with corresponding names into an object:*/

	return object;
	/* if the function is called the entrys of above object can be called via calcVapourPressure.entry, eg calcVapourPressure.satVapourPressure*/
}
