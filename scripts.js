function mapGetDataPointFieldFunc(r){return function(e){return{x:e.x,y:e.y[r]}}}function mapGetLineDataFieldFunc(r){return function(e){var a=jQuery.extend(!0,{},e)
return a.data=a.data.map(mapGetDataPointFieldFunc(r)),a}}function filterOperationFunc(r){return function(e){return"ALL"===r?!0:r===e.custom_meta.operation}}function filterTimeComplexityFunc(r){return function(e){return"ALL"===r?!0:r===e.custom_meta.time_complex}}function updateChartData(){var r=jQuery("#select-data-types").val(),e=jQuery("#select-operations").val(),a=jQuery("#select-complexities").val(),o=chartData[r].datasets.filter(filterOperationFunc(e))
o=o.filter(filterTimeComplexityFunc(a)),displayChart.data.datasets=o,displayChart.update()}var DATASETS={datasets:[{label:"list.append: empty",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"populate"},data:[{x:1e3,y:{raw:.013,per_round:.04,ratio:1,per_sec:23076923}},{x:1e4,y:{raw:.123,per_round:.41,ratio:9.46,per_sec:24390243}},{x:2e4,y:{raw:.26,per_round:.87,ratio:20,per_sec:23076923}},{x:3e4,y:{raw:.396,per_round:1.32,ratio:30.46,per_sec:22727272}},{x:4e4,y:{raw:.523,per_round:1.74,ratio:40.23,per_sec:22944550}},{x:5e4,y:{raw:.687,per_round:2.29,ratio:52.85,per_sec:21834061}},{x:6e4,y:{raw:.799,per_round:2.66,ratio:61.46,per_sec:22528160}},{x:7e4,y:{raw:.932,per_round:3.11,ratio:71.69,per_sec:22532188}},{x:8e4,y:{raw:1.081,per_round:3.6,ratio:83.15,per_sec:22201665}},{x:9e4,y:{raw:1.223,per_round:4.08,ratio:94.08,per_sec:22076860}},{x:1e5,y:{raw:1.349,per_round:4.5,ratio:103.77,per_sec:22238695}},{x:2e5,y:{raw:2.695,per_round:8.98,ratio:207.31,per_sec:22263450}},{x:3e5,y:{raw:4.115,per_round:13.72,ratio:316.54,per_sec:21871202}},{x:4e5,y:{raw:5.498,per_round:18.33,ratio:422.92,per_sec:21826118}},{x:5e5,y:{raw:6.777,per_round:22.59,ratio:521.31,per_sec:22133687}},{x:6e5,y:{raw:8.207,per_round:27.36,ratio:631.31,per_sec:21932496}},{x:7e5,y:{raw:9.549,per_round:31.83,ratio:734.54,per_sec:21991831}},{x:8e5,y:{raw:11.044,per_round:36.81,ratio:849.54,per_sec:21731256}},{x:9e5,y:{raw:12.786,per_round:42.62,ratio:983.54,per_sec:21116846}},{x:1e6,y:{raw:14.309,per_round:47.7,ratio:1100.69,per_sec:20965825}}]},{label:"list.prepend: empty",custom_meta:{time_complex:"O(N*N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"populate"},data:[{x:1e3,y:{raw:.071,per_round:.24,ratio:1,per_sec:4225352}},{x:1e4,y:{raw:4.85,per_round:16.17,ratio:68.31,per_sec:618556}},{x:2e4,y:{raw:19.042,per_round:63.47,ratio:268.2,per_sec:315092}},{x:3e4,y:{raw:42.614,per_round:142.05,ratio:600.2,per_sec:211198}},{x:4e4,y:{raw:78.254,per_round:260.85,ratio:1102.17,per_sec:153346}},{x:5e4,y:{raw:130.392,per_round:434.64,ratio:1836.51,per_sec:115037}},{x:6e4,y:{raw:188.484,per_round:628.28,ratio:2654.7,per_sec:95498}},{x:7e4,y:{raw:261.952,per_round:873.17,ratio:3689.46,per_sec:80167}},{x:8e4,y:{raw:339.211,per_round:1130.7,ratio:4777.62,per_sec:70752}},{x:9e4,y:{raw:431.46,per_round:1438.2,ratio:6076.9,per_sec:62578}},{x:1e5,y:{raw:534.319,per_round:1781.06,ratio:7525.62,per_sec:56146}},{x:2e5,y:{raw:2239.293,per_round:7464.31,ratio:31539.34,per_sec:26794}}]},{label:"list.pop: front",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"delete"},data:[{x:1e3,y:{raw:.041,per_round:.14,ratio:1,per_sec:7317073}},{x:1e4,y:{raw:.568,per_round:1.89,ratio:13.85,per_sec:5281690}},{x:2e4,y:{raw:1.167,per_round:3.89,ratio:28.46,per_sec:5141388}},{x:3e4,y:{raw:1.779,per_round:5.93,ratio:43.39,per_sec:5059021}},{x:4e4,y:{raw:2.846,per_round:9.49,ratio:69.41,per_sec:4216444}},{x:5e4,y:{raw:3.789,per_round:12.63,ratio:92.41,per_sec:3958828}},{x:6e4,y:{raw:4.549,per_round:15.16,ratio:110.95,per_sec:3956913}},{x:7e4,y:{raw:5.39,per_round:17.97,ratio:131.46,per_sec:3896103}},{x:8e4,y:{raw:6.128,per_round:20.43,ratio:149.46,per_sec:3916449}},{x:9e4,y:{raw:6.825,per_round:22.75,ratio:166.46,per_sec:3956043}},{x:1e5,y:{raw:7.559,per_round:25.2,ratio:184.37,per_sec:3968778}},{x:2e5,y:{raw:15.132,per_round:50.44,ratio:369.07,per_sec:3965107}},{x:3e5,y:{raw:22.69,per_round:75.63,ratio:553.41,per_sec:3966505}},{x:4e5,y:{raw:30.309,per_round:101.03,ratio:739.24,per_sec:3959220}},{x:5e5,y:{raw:38.189,per_round:127.3,ratio:931.44,per_sec:3927832}},{x:6e5,y:{raw:46.945,per_round:156.48,ratio:1145,per_sec:3834274}},{x:7e5,y:{raw:55.942,per_round:186.47,ratio:1364.44,per_sec:3753887}},{x:8e5,y:{raw:70.718,per_round:235.73,ratio:1724.83,per_sec:3393761}},{x:9e5,y:{raw:83.992,per_round:279.97,ratio:2048.59,per_sec:3214591}},{x:1e6,y:{raw:117.816,per_round:392.72,ratio:2873.56,per_sec:2546343}}]},{label:"list.pop: back",custom_meta:{time_complex:"O(1)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"delete"},data:[{x:1e3,y:{raw:.025,per_round:.08,ratio:1,per_sec:12e6}},{x:1e4,y:{raw:.025,per_round:.08,ratio:1,per_sec:12e7}},{x:2e4,y:{raw:.026,per_round:.09,ratio:1.04,per_sec:230769230}},{x:3e4,y:{raw:.024,per_round:.08,ratio:.96,per_sec:375e6}},{x:4e4,y:{raw:.025,per_round:.08,ratio:1,per_sec:48e7}},{x:5e4,y:{raw:.026,per_round:.09,ratio:1.04,per_sec:576923076}},{x:6e4,y:{raw:.025,per_round:.08,ratio:1,per_sec:72e7}},{x:7e4,y:{raw:.025,per_round:.08,ratio:1,per_sec:84e7}},{x:8e4,y:{raw:.031,per_round:.1,ratio:1.24,per_sec:774193548}},{x:9e4,y:{raw:.028,per_round:.09,ratio:1.12,per_sec:964285714}},{x:1e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:12e8}},{x:2e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:24e8}},{x:3e5,y:{raw:.027,per_round:.09,ratio:1.08,per_sec:3333333333}},{x:4e5,y:{raw:.026,per_round:.09,ratio:1.04,per_sec:4615384615}},{x:5e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:6e9}},{x:6e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:72e8}},{x:7e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:84e8}},{x:8e5,y:{raw:.025,per_round:.08,ratio:1,per_sec:96e8}},{x:9e5,y:{raw:.026,per_round:.09,ratio:1.04,per_sec:10384615384}},{x:1e6,y:{raw:.025,per_round:.08,ratio:1,per_sec:12e9}}]},{label:"list.pop: middle",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"delete"},data:[{x:1e3,y:{raw:.024,per_round:.08,ratio:1,per_sec:125e5}},{x:1e4,y:{raw:.248,per_round:.83,ratio:10.33,per_sec:12096774}},{x:2e4,y:{raw:.579,per_round:1.93,ratio:24.12,per_sec:10362694}},{x:3e4,y:{raw:.87,per_round:2.9,ratio:36.25,per_sec:10344827}},{x:4e4,y:{raw:1.198,per_round:3.99,ratio:49.92,per_sec:10016694}},{x:5e4,y:{raw:1.539,per_round:5.13,ratio:64.12,per_sec:9746588}},{x:6e4,y:{raw:1.978,per_round:6.59,ratio:82.42,per_sec:9100101}},{x:7e4,y:{raw:2.431,per_round:8.1,ratio:101.29,per_sec:8638420}},{x:8e4,y:{raw:2.831,per_round:9.44,ratio:117.96,per_sec:8477569}},{x:9e4,y:{raw:3.233,per_round:10.78,ratio:134.71,per_sec:8351376}},{x:1e5,y:{raw:3.655,per_round:12.18,ratio:152.29,per_sec:8207934}},{x:2e5,y:{raw:7.703,per_round:25.68,ratio:320.96,per_sec:7789173}},{x:3e5,y:{raw:11.521,per_round:38.4,ratio:480.04,per_sec:7811821}},{x:4e5,y:{raw:15.369,per_round:51.23,ratio:640.38,per_sec:7807925}},{x:5e5,y:{raw:19.05,per_round:63.5,ratio:793.75,per_sec:7874015}},{x:6e5,y:{raw:22.568,per_round:75.23,ratio:940.33,per_sec:7975895}},{x:7e5,y:{raw:26.66,per_round:88.87,ratio:1110.83,per_sec:7876969}},{x:8e5,y:{raw:30.943,per_round:103.14,ratio:1289.29,per_sec:7756196}},{x:9e5,y:{raw:35.197,per_round:117.32,ratio:1466.54,per_sec:7671108}},{x:1e6,y:{raw:40.975,per_round:136.58,ratio:1707.29,per_sec:7321537}}]},{label:"list.insert: front",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"insert"},data:[{x:1e3,y:{raw:.163,per_round:.54,ratio:1,per_sec:1840490}},{x:1e4,y:{raw:1.008,per_round:3.36,ratio:6.18,per_sec:2976190}},{x:2e4,y:{raw:1.932,per_round:6.44,ratio:11.85,per_sec:3105590}},{x:3e4,y:{raw:2.933,per_round:9.78,ratio:17.99,per_sec:3068530}},{x:4e4,y:{raw:4.387,per_round:14.62,ratio:26.91,per_sec:2735354}},{x:5e4,y:{raw:5.449,per_round:18.16,ratio:33.43,per_sec:2752798}},{x:6e4,y:{raw:6.559,per_round:21.86,ratio:40.24,per_sec:2744320}},{x:7e4,y:{raw:7.61,per_round:25.37,ratio:46.69,per_sec:2759526}},{x:8e4,y:{raw:8.653,per_round:28.84,ratio:53.09,per_sec:2773604}},{x:9e4,y:{raw:9.702,per_round:32.34,ratio:59.52,per_sec:2782931}},{x:1e5,y:{raw:10.743,per_round:35.81,ratio:65.91,per_sec:2792516}},{x:2e5,y:{raw:21.117,per_round:70.39,ratio:129.55,per_sec:2841312}},{x:3e5,y:{raw:32.095,per_round:106.98,ratio:196.9,per_sec:2804175}},{x:4e5,y:{raw:43.176,per_round:143.92,ratio:264.88,per_sec:2779321}},{x:5e5,y:{raw:57.108,per_round:190.36,ratio:350.36,per_sec:2626602}},{x:6e5,y:{raw:68.533,per_round:228.44,ratio:420.45,per_sec:2626471}},{x:7e5,y:{raw:87.691,per_round:292.3,ratio:537.98,per_sec:2394772}},{x:8e5,y:{raw:109.178,per_round:363.93,ratio:669.8,per_sec:2198245}},{x:9e5,y:{raw:141.372,per_round:471.24,ratio:867.31,per_sec:1909854}},{x:1e6,y:{raw:175.644,per_round:585.48,ratio:1077.57,per_sec:1708e3}}]},{label:"list.insert: back",custom_meta:{time_complex:"O(1)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"insert"},data:[{x:1e3,y:{raw:.012,per_round:.04,ratio:1,per_sec:25e6}},{x:1e4,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:230769230}},{x:2e4,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:461538461}},{x:3e4,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:692307692}},{x:4e4,y:{raw:.012,per_round:.04,ratio:1,per_sec:1e9}},{x:5e4,y:{raw:.017,per_round:.06,ratio:1.42,per_sec:882352941}},{x:6e4,y:{raw:.012,per_round:.04,ratio:1,per_sec:15e8}},{x:7e4,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:1615384615}},{x:8e4,y:{raw:.012,per_round:.04,ratio:1,per_sec:2e9}},{x:9e4,y:{raw:.012,per_round:.04,ratio:1,per_sec:225e7}},{x:1e5,y:{raw:.012,per_round:.04,ratio:1,per_sec:25e8}},{x:2e5,y:{raw:.015,per_round:.05,ratio:1.25,per_sec:4e9}},{x:3e5,y:{raw:.012,per_round:.04,ratio:1,per_sec:75e8}},{x:4e5,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:9230769230}},{x:5e5,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:11538461538}},{x:6e5,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:13846153846}},{x:7e5,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:16153846153}},{x:8e5,y:{raw:.014,per_round:.05,ratio:1.17,per_sec:17142857142}},{x:9e5,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:20769230769}},{x:1e6,y:{raw:.013,per_round:.04,ratio:1.08,per_sec:23076923076}}]},{label:"list.insert: middle",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"insert"},data:[{x:1e3,y:{raw:.121,per_round:.4,ratio:1,per_sec:2479338}},{x:1e4,y:{raw:.553,per_round:1.84,ratio:4.57,per_sec:5424954}},{x:2e4,y:{raw:1.05,per_round:3.5,ratio:8.68,per_sec:5714285}},{x:3e4,y:{raw:1.584,per_round:5.28,ratio:13.09,per_sec:5681818}},{x:4e4,y:{raw:2.059,per_round:6.86,ratio:17.02,per_sec:5828071}},{x:5e4,y:{raw:2.558,per_round:8.53,ratio:21.14,per_sec:5863956}},{x:6e4,y:{raw:3.292,per_round:10.97,ratio:27.21,per_sec:5467800}},{x:7e4,y:{raw:3.886,per_round:12.95,ratio:32.12,per_sec:5404014}},{x:8e4,y:{raw:4.522,per_round:15.07,ratio:37.37,per_sec:5307386}},{x:9e4,y:{raw:5.082,per_round:16.94,ratio:42,per_sec:5312868}},{x:1e5,y:{raw:5.628,per_round:18.76,ratio:46.51,per_sec:5330490}},{x:2e5,y:{raw:11.246,per_round:37.49,ratio:92.94,per_sec:5335230}},{x:3e5,y:{raw:17.286,per_round:57.62,ratio:142.86,per_sec:5206525}},{x:4e5,y:{raw:22.47,per_round:74.9,ratio:185.7,per_sec:5340453}},{x:5e5,y:{raw:28.476,per_round:94.92,ratio:235.34,per_sec:5267593}},{x:6e5,y:{raw:34.324,per_round:114.41,ratio:283.67,per_sec:5244144}},{x:7e5,y:{raw:40.758,per_round:135.86,ratio:336.84,per_sec:5152362}},{x:8e5,y:{raw:45.848,per_round:152.83,ratio:378.91,per_sec:5234688}},{x:9e5,y:{raw:50.64,per_round:168.8,ratio:418.51,per_sec:5331753}},{x:1e6,y:{raw:62.987,per_round:209.96,ratio:520.55,per_sec:4762887}}]},{label:"list.index: random",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"search"},data:[{x:1e3,y:{raw:4.032,per_round:13.44,ratio:1,per_sec:74404}},{x:1e4,y:{raw:39.983,per_round:133.28,ratio:9.92,per_sec:75031}},{x:2e4,y:{raw:78.086,per_round:260.29,ratio:19.37,per_sec:76838}},{x:3e4,y:{raw:117.253,per_round:390.84,ratio:29.08,per_sec:76757}},{x:4e4,y:{raw:156.241,per_round:520.8,ratio:38.75,per_sec:76804}},{x:5e4,y:{raw:193.968,per_round:646.56,ratio:48.11,per_sec:77332}},{x:6e4,y:{raw:238.704,per_round:795.68,ratio:59.2,per_sec:75407}},{x:7e4,y:{raw:276.601,per_round:922,ratio:68.6,per_sec:75921}},{x:8e4,y:{raw:323.396,per_round:1077.99,ratio:80.21,per_sec:74212}},{x:9e4,y:{raw:355.51,per_round:1185.03,ratio:88.17,per_sec:75947}},{x:1e5,y:{raw:372.434,per_round:1241.45,ratio:92.37,per_sec:80551}},{x:2e5,y:{raw:736.186,per_round:2453.95,ratio:182.59,per_sec:81501}},{x:3e5,y:{raw:1078.986,per_round:3596.62,ratio:267.61,per_sec:83411}},{x:4e5,y:{raw:1377.355,per_round:4591.18,ratio:341.61,per_sec:87123}},{x:5e5,y:{raw:1679.389,per_round:5597.96,ratio:416.52,per_sec:89318}},{x:6e5,y:{raw:1956.398,per_round:6521.33,ratio:485.22,per_sec:92005}},{x:7e5,y:{raw:2207.63,per_round:7358.77,ratio:547.53,per_sec:95124}},{x:8e5,y:{raw:2382.202,per_round:7940.67,ratio:590.82,per_sec:100747}},{x:9e5,y:{raw:2522.829,per_round:8409.43,ratio:625.7,per_sec:107022}},{x:1e6,y:{raw:2654.367,per_round:8847.89,ratio:658.33,per_sec:113021}}]},{label:"list.index: matches",custom_meta:{time_complex:"O(N)",space_complex:"O(N)",data_structure:"list",language:"python",operation:"search"},data:[{x:1e3,y:{raw:2.025,per_round:6.75,ratio:1,per_sec:148148}},{x:1e4,y:{raw:19.461,per_round:64.87,ratio:9.61,per_sec:154154}},{x:2e4,y:{raw:40.726,per_round:135.75,ratio:20.11,per_sec:147326}},{x:3e4,y:{raw:59.265,per_round:197.55,ratio:29.27,per_sec:151860}},{x:4e4,y:{raw:83.239,per_round:277.46,ratio:41.11,per_sec:144163}},{x:5e4,y:{raw:95.891,per_round:319.64,ratio:47.35,per_sec:156427}},{x:6e4,y:{raw:121.423,per_round:404.74,ratio:59.96,per_sec:148242}},{x:7e4,y:{raw:138.069,per_round:460.23,ratio:68.18,per_sec:152097}},{x:8e4,y:{raw:157.737,per_round:525.79,ratio:77.89,per_sec:152151}},{x:9e4,y:{raw:179.03,per_round:596.77,ratio:88.41,per_sec:150812}},{x:1e5,y:{raw:194.952,per_round:649.84,ratio:96.27,per_sec:153884}},{x:2e5,y:{raw:381.983,per_round:1273.28,ratio:188.63,per_sec:157075}},{x:3e5,y:{raw:561.967,per_round:1873.22,ratio:277.51,per_sec:160151}},{x:4e5,y:{raw:726.157,per_round:2420.52,ratio:358.6,per_sec:165253}},{x:5e5,y:{raw:906.764,per_round:3022.55,ratio:447.78,per_sec:165423}},{x:6e5,y:{raw:1041.567,per_round:3471.89,ratio:514.35,per_sec:172816}},{x:7e5,y:{raw:1236.888,per_round:4122.96,ratio:610.81,per_sec:169780}},{x:8e5,y:{raw:1312.424,per_round:4374.75,ratio:648.11,per_sec:182867}},{x:9e5,y:{raw:1481.371,per_round:4937.9,ratio:731.54,per_sec:182263}},{x:1e6,y:{raw:1541.567,per_round:5138.56,ratio:761.27,per_sec:194607}}]}]},borderColor=["rgba(244, 67, 54, 0.5)","rgba(63, 81, 181, 0.5)","rgba(233, 30, 99, 0.5)","rgba(0, 150, 136, 0.5)","rgba(98, 178, 28, 0.5)","rgba(103, 58, 183, 0.5)","rgba(255, 152, 0, 0.5)","rgba(121, 85, 72, 0.5)","rgba(188, 75, 81, 0.5)","rgba(96, 125, 139, 0.5)"],backgroundColor=["rgba(244, 67, 54, 0.2)","rgba(63, 81, 181, 0.2)","rgba(233, 30, 99, 0.2)","rgba(0, 150, 136, 0.2)","rgba(98, 178, 28, 0.2)","rgba(103, 58, 183, 0.2)","rgba(255, 152, 0, 0.2)","rgba(121, 85, 72, 0.2)","rgba(188, 75, 81, 0.2)","rgba(96, 125, 139, 0.2)"]
for(var i in DATASETS.datasets)DATASETS.datasets[i].backgroundColor="rgba(0, 0, 0, 0)",DATASETS.datasets[i].borderColor=borderColor[i]
var chartData={raw:{datasets:DATASETS.datasets.map(mapGetLineDataFieldFunc("raw"))},ratio:{datasets:DATASETS.datasets.map(mapGetLineDataFieldFunc("ratio"))},per_sec:{datasets:DATASETS.datasets.map(mapGetLineDataFieldFunc("per_sec"))},per_round:{datasets:DATASETS.datasets.map(mapGetLineDataFieldFunc("per_round"))}},ctx=document.getElementById("myChart"),displayChart=new Chart(ctx,{type:"line",data:jQuery.extend(!0,{},chartData.ratio),options:{scales:{xAxes:[{type:"linear",position:"bottom"}]}}})
jQuery("#select-data-types").change(updateChartData),jQuery("#select-operations").change(updateChartData),jQuery("#select-complexities").change(updateChartData),updateChartData()
