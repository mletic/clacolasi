export const mapConfig = {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "id": "rdn6z9k2",
            "name": [
              "item condition"
            ],
            "type": "multiSelect",
            "dataId": [
              "1d840908-906b-4b1d-9841-8735705c3d43"
            ],
            "view": "side",
            "value": [
              "Wurdecinf"
            ]
          },
          {
            "id": "fi3ch1309",
            "name": [
              "item condition"
            ],
            "type": "multiSelect",
            "dataId": [
              "9d0b0db0-5380-4084-b5bd-84f1ea37c75b"
            ],
            "view": "side",
            "value": [
              "Wurdecda+"
            ]
          }
        ],
        "layers": [
          {
            "id": "wg37pbj",
            "type": "grid",
            "config": {
              "dataId": "data-try-inf",
              "label": "1",
              "color": [
                77,
                193,
                156
              ],
              "isVisible": false,
              "hidden": false,
              "legend": {
                "isIncluded": true
              },
              "columns": {
                "lat": "mesto_latitude",
                "lng": "mesto_longitude"
              },
              "visConfig": {
                "opacity": 0.8,
                "worldUnitSize": 9.7403,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#FFC300",
                    "#EF9100",
                    "#D6610A",
                    "#B72F15",
                    "#880030",
                    "#4C0035"
                  ],
                  "reversed": true
                },
                "coverage": 1,
                "sizeRange": [
                  0,
                  850.88
                ],
                "percentile": [
                  0,
                  100
                ],
                "elevationPercentile": [
                  0,
                  100
                ],
                "elevationScale": 6.5,
                "enableElevationZoomFactor": true,
                "fixedHeight": false,
                "colorAggregation": "average",
                "sizeAggregation": "average",
                "enable3d": true
              }
            },
            "visualChannels": {
              "colorField": {
                "type": "integer",
                "name": "judgment"
              },
              "colorScale": "quantile",
              "sizeField": {
                "type": "integer",
                "name": "judgment"
              },
              "sizeScale": "linear"
            }
          },
          {
            "id": "xzitlx",
            "type": "grid",
            "config": {
              "dataId": "data-try-inf",
              "label": "2",
              "color": [
                18,
                147,
                154
              ],
              "isVisible": true,
              "hidden": false,
              "legend": {
                "isIncluded": true
              },
              "columns": {
                "lat": "mesto_latitude",
                "lng": "mesto_longitude"
              },
              "visConfig": {
                "opacity": 0.8,
                "worldUnitSize": 9.7403,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#FFC300",
                    "#EF9100",
                    "#D6610A",
                    "#B72F15",
                    "#880030",
                    "#4C0035"
                  ],
                  "reversed": true
                },
                "coverage": 1,
                "sizeRange": [
                  0,
                  850.88
                ],
                "percentile": [
                  0,
                  100
                ],
                "elevationPercentile": [
                  0,
                  100
                ],
                "elevationScale": 6.5,
                "enableElevationZoomFactor": true,
                "fixedHeight": false,
                "colorAggregation": "average",
                "sizeAggregation": "average",
                "enable3d": true
              }
            },
            "visualChannels": {
              "colorField": {
                "type": "integer",
                "name": "judgment"
              },
              "colorScale": "quantile",
              "sizeField": {
                "type": "integer",
                "name": "judgment"
              },
              "sizeScale": "linear"
            }
          }
        ],
        "effects": [],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "1d840908-906b-4b1d-9841-8735705c3d43": [
                {
                  "name": "28",
                  "format": null
                },
                {
                  "name": "Interview number (ongoing)",
                  "format": null
                },
                {
                  "name": "Serial number (if provided)",
                  "format": null
                },
                {
                  "name": "Questionnaire that has been used in the interview",
                  "format": null
                },
                {
                  "name": "Language",
                  "format": null
                }
              ],
              "9d0b0db0-5380-4084-b5bd-84f1ea37c75b": [
                {
                  "name": "judgment",
                  "format": null
                },
                {
                  "name": "item condition",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          },
          "legend": {
            "hideInvisibleLayers": false,
            "enabled": false
          },
          "annotation": {
            "enabled": true
          }
        },
        "layerBlending": "subtractive",
        "overlayBlending": "normal",
        "splitMaps": [
          {
            "layers": {
              "xzitlx": true
            }
          },
          {
            "layers": {
              "xzitlx": true
            }
          }
        ],
        "animationConfig": {
          "currentTime": null,
          "speed": 1
        },
        "editor": {
          "features": [],
          "visible": true
        },
        "metrics": [],
        "geoKeys": [],
        "groupBys": [],
        "datasets": {
          "fieldDisplayNames": {
            "1d840908-906b-4b1d-9841-8735705c3d43": {},
            "9d0b0db0-5380-4084-b5bd-84f1ea37c75b": {}
          },
          "fieldDisplayFormats": {
            "1d840908-906b-4b1d-9841-8735705c3d43": {},
            "9d0b0db0-5380-4084-b5bd-84f1ea37c75b": {}
          },
          "datasetColors": {
            "1d840908-906b-4b1d-9841-8735705c3d43": [
              192,
              108,
              132
            ],
            "9d0b0db0-5380-4084-b5bd-84f1ea37c75b": [
              0,
              92,
              255
            ]
          }
        },
        "joins": [],
        "analyses": [],
        "charts": [
          {
            "id": "zjemke",
            "title": "New Chart",
            "dataId": "9d0b0db0-5380-4084-b5bd-84f1ea37c75b",
            "applyFilters": true,
            "type": "barChart",
            "xAxis": {
              "title": null,
              "field": {
                "name": "item condition",
                "type": "string"
              },
              "aggregation": "uniqueBin",
              "interval": "1-year"
            },
            "yAxis": {
              "field": {
                "name": "judgment",
                "type": "integer"
              },
              "aggregation": "COUNT",
              "title": "judgment",
              "enableGridLine": true
            },
            "groupBy": {
              "title": null,
              "field": null,
              "aggregation": null
            },
            "numBins": 10,
            "binOthers": false,
            "numGroups": 10,
            "groupOthers": false,
            "groupMode": "stacked",
            "colorBy": "X-Axis",
            "enableVizMode": false,
            "vizMode": "CHART",
            "chartDisplay": {
              "colorRange": {
                "name": "Uber Viz Qualitative",
                "type": "qualitative",
                "category": "Uber",
                "colors": [
                  "#12939A",
                  "#DDB27C",
                  "#88572C",
                  "#FF991F",
                  "#F15C17",
                  "#223F9A",
                  "#DA70BF",
                  "#125C77",
                  "#4DC19C",
                  "#776E57"
                ]
              },
              "sort": "descending",
              "formatXAxis": "DECIMAL_SHORT_COMMA",
              "formatYAxis": "DECIMAL_SHORT_COMMA",
              "showXAxis": true,
              "showYAxis": true,
              "showValues": false,
              "labelFormatMode": "valueOnly",
              "labelSkipWidth": 0,
              "labelSkipHeight": 0,
              "logScaleValues": false,
              "dynamicTickRotate": true,
              "rotateXTicks": true,
              "rotateYTicks": null,
              "lessXTicks": false,
              "lessYTicks": false,
              "moreSpaceXAxis": 1,
              "moreSpaceYAxis": 1,
              "sortGroupBy": "descending",
              "isHorizontal": false,
              "innerPadding": 0,
              "padding": 0.1,
              "showAxisLine": false,
              "showLegend": true,
              "enableLegendCheckboxMode": true,
              "xAxisLabels": [],
              "groupByLabels": [],
              "hint": ""
            }
          },
          {
            "id": "72cro5n",
            "title": "Count of rows in sorted data - Sheet1.csv",
            "dataId": "9d0b0db0-5380-4084-b5bd-84f1ea37c75b",
            "applyFilters": true,
            "type": "bigNumber",
            "axis": {
              "field": null,
              "aggregation": "COUNT",
              "title": null
            },
            "chartDisplay": {
              "showTotal": true,
              "format": "DECIMAL_SHORT_COMMA"
            },
            "useMetric": false
          }
        ],
        "annotations": [],
        "layerOrder": [
          "wg37pbj",
          "xzitlx"
        ],
        "projectColors": [
          "#000000",
          "#F7F8FA"
        ]
      },
      "mapState": {
        "bearing": -7.213235294117645,
        "dragRotate": true,
        "latitude": 44.0572155,
        "longitude": 18.0231654,
        "pitch": 42.450331125827816,
        "zoom": 6.811646295006886,
        "isSplit": true,
        "isViewportSynced": true,
        "isZoomLocked": false,
        "splitMapViewports": [],
        "mapViewMode": "MODE_3D",
        "mapSplitMode": "SWIPE_COMPARE",
        "globe": {
          "enabled": false,
          "config": {
            "atmosphere": true,
            "azimuth": false,
            "azimuthAngle": 45,
            "terminator": true,
            "terminatorOpacity": 0.35,
            "basemap": true,
            "labels": false,
            "labelsColor": [
              132,
              138,
              138
            ],
            "adminLines": true,
            "adminLinesColor": [
              203,
              205,
              207
            ],
            "water": true,
            "waterColor": [
              219,
              226,
              230
            ],
            "surface": true,
            "surfaceColor": [
              235,
              240,
              240
            ]
          }
        }
      },
      "mapStyle": {
        "styleType": "light",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": false,
          "road": true,
          "border": true,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          218.82023004728688,
          223.47597962276103,
          223.47597962276103
        ],
        "backgroundColor": [
          255,
          255,
          255
        ],
        "mapStyles": {}
      },
      "uiState": {}
    }
  }