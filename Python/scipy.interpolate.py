import numpy as np
from scipy.interpolate import interp1d
import matplotlib.pyplot as plt


time_points = np.array([6, 9, 12, 15, 18]) 
temperature_points = np.array([15, 18, 22, 21, 17])


interpolation_function = interp1d(time_points, temperature_points, kind='cubic')


time_interpolated = np.linspace(6, 18, num=100)
temperature_interpolated = interpolation_function(time_interpolated)


plt.plot(time_points, temperature_points, 'o', label='Recorded Temperatures')
plt.plot(time_interpolated, temperature_interpolated, '-', label='Cubic Interpolation')
plt.legend()
plt.xlabel('Time (hours)')
plt.ylabel('Temperature (°C)')
plt.title('Temperature Interpolation Throughout the Day')
plt.grid()
plt.show()
