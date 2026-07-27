/* Spendflo unified block builder engine — powers Newsletter & Whitepaper builders.
 * WYSIWYG: the editor canvas IS the exported artifact (same DOM captured 1:1).
 * Reliable logo: Spendflo mark rendered as inline SVG (survives html2canvas & embeds in HTML).
 * Config via window.SF_BUILDER = {key,title,fileBase,mode:'flow'|'paged',pageW,pageH,order,defaultDoc,builtin}. */
window.SF_LOGO_BLACK="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDUyLjM1IDk3LjciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNkNTNjODY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQtMyk7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQtMik7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSI0NS41NSIgeTE9IjAiIHgyPSI0NS41NSIgeTI9IjU0Ljc3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2RlNDdiNCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjZDMzNWIiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iNDUuNTQiIHkxPSIzOC45OCIgeDI9IjQ1LjU0IiB5Mj0iNzIuMDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWJjNWRhIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2QzN2FhOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTMiIHgxPSI0NS41NCIgeTE9IjkwLjEyIiB4Mj0iNDUuNTQiIHkyPSI2OC43OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlN2I4ZDIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjRlM2VjIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBpZD0iTGF5ZXJfMS0yIiBkYXRhLW5hbWU9IkxheWVyIDEiPgogICAgPGc+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMTguNzMsMzMuOTRjMC0zLjYuOTMtNi43NywyLjc4LTkuNTMsMS44Ni0yLjc1LDQuNDMtNC45LDcuNzItNi40NSwzLjI5LTEuNTUsNy4xLTIuMzIsMTEuNDMtMi4zMnM3Ljc3LjczLDEwLjg0LDIuMTljMy4wNiwxLjQ2LDUuNDUsMy41NCw3LjE3LDYuMjRzMi42Myw1LjksMi43NCw5LjYxaC0xMC43OWMtLjExLTIuNjQtMS4wNy00LjcxLTIuODctNi4yLTEuOC0xLjQ5LTQuMjItMi4yMy03LjI1LTIuMjMtMy4zMiwwLTUuOTcuNzUtNy45NywyLjIzLTIsMS40OS0yLjk5LDMuNTMtMi45OSw2LjExLDAsMi4xOS42LDMuOTIsMS44MSw1LjE5LDEuMjEsMS4yNiwzLjExLDIuMjEsNS42OSwyLjgybDkuNywyLjE5YzUuMjgsMS4xMyw5LjIyLDMuMDUsMTEuODEsNS43OCwyLjU5LDIuNzMsMy44OCw2LjQsMy44OCwxMS4wMSwwLDMuNzctLjkzLDcuMDgtMi43OCw5Ljk1LTEuODYsMi44Ny00LjQ4LDUuMDctNy44OSw2LjYyLTMuNCwxLjU1LTcuMzgsMi4zMi0xMS45MywyLjMycy04LjEyLS43NS0xMS4zOC0yLjIzYy0zLjI2LTEuNDktNS44MS0zLjU4LTcuNjMtNi4yOC0xLjgzLTIuNy0yLjgtNS44Ny0yLjkxLTkuNTNoMTAuNzljLjA1LDIuNTksMS4wOCw0LjYzLDMuMDgsNi4xMSwyLDEuNDksNC43MSwyLjIzLDguMTQsMi4yM3M2LjQ1LS43NCw4LjU2LTIuMjNjMi4xMS0xLjQ5LDMuMTYtMy40NywzLjE2LTUuOTUsMC0yLjE0LS41Ni0zLjg0LTEuNjktNS4xLTEuMTMtMS4yNy0yLjk1LTIuMTUtNS40OC0yLjY2bC05Ljc4LTIuMTljLTUuMjMtMS4xMi05LjE5LTMuMTYtMTEuODktNi4xMS0yLjctMi45NS00LjA1LTYuODItNC4wNS0xMS42WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0xNzAuNjgsOTcuN3YtNjAuOTdoOS41M2wuNjcsNi4zMmMxLjI0LTIuNDIsMy4xNS00LjI5LDUuNzQtNS42MSwyLjU5LTEuMzIsNS40My0xLjk4LDguNTItMS45OCwzLjk5LDAsNy40My45LDEwLjMzLDIuNywyLjg5LDEuOCw1LjE2LDQuMyw2Ljc5LDcuNTFzMi40NSw3LDIuNDUsMTEuMzgtLjc2LDguMTgtMi4yOCwxMS41NWMtMS41MiwzLjM3LTMuNzMsNi4wMy02LjYyLDcuOTctMi45LDEuOTQtNi40MiwyLjkxLTEwLjU4LDIuOTEtMy4wOSwwLTUuOTItLjU5LTguNDgtMS43Ny0yLjU2LTEuMTgtNC40OC0yLjgxLTUuNzgtNC44OXYyNC44OGgtMTAuMjlaTTE4MS4wNSw1Ny41NWMwLDIuNDguNDgsNC42NywxLjQzLDYuNTguOTYsMS45MSwyLjMyLDMuNDIsNC4wOSw0LjUxLDEuNzcsMS4xLDMuODQsMS42NCw2LjIsMS42NHM0LjUtLjU1LDYuMjQtMS42NGMxLjc0LTEuMSwzLjA2LTIuNiwzLjk2LTQuNTEuOS0xLjkxLDEuMzUtNC4xLDEuMzUtNi41OHMtLjQ1LTQuNjctMS4zNS02LjU4Yy0uOS0xLjkxLTIuMjItMy40Mi0zLjk2LTQuNTEtMS43NC0xLjEtMy44Mi0xLjY0LTYuMjQtMS42NHMtNC40My41NC02LjIsMS42Yy0xLjc3LDEuMDctMy4xMywyLjU2LTQuMDksNC40Ny0uOTYsMS45MS0xLjQzLDQuMTMtMS40Myw2LjY2WiIvPgogICAgICAgIDxwYXRoIGQ9Ik0yNDEuNTIsNzkuNDhjLTQuMSwwLTcuNzUtLjk0LTEwLjkyLTIuODMtMy4xOC0xLjg4LTUuNjYtNC40Ny03LjQ2LTcuNzYtMS44LTMuMjktMi43LTcuMDctMi43LTExLjM0cy44Ny04LjE1LDIuNjEtMTEuNDdjMS43NC0zLjMyLDQuMTktNS45Miw3LjM0LTcuOCwzLjE1LTEuODgsNi43NS0yLjgzLDEwLjc5LTIuODNzNy44NC44OSwxMC44OCwyLjY2YzMuMDQsMS43Nyw1LjM4LDQuMjMsNy4wNCw3LjM4LDEuNjYsMy4xNSwyLjQ5LDYuOTIsMi40OSwxMS4zdjMuMTJsLTM1Ljc2LjA4LjE3LTYuNThoMjUuMzhjMC0yLjg3LS45Mi01LjE3LTIuNzQtNi45MS0xLjgzLTEuNzQtNC4yOS0yLjYxLTcuMzgtMi42MS0yLjQyLDAtNC40Ni41MS02LjExLDEuNTItMS42NiwxLjAxLTIuOTEsMi41My0zLjc1LDQuNTUtLjg0LDIuMDItMS4yNyw0LjUtMS4yNyw3LjQyLDAsNC41Ljk3LDcuOSwyLjkxLDEwLjIsMS45NCwyLjMxLDQuODIsMy40Niw4LjY0LDMuNDYsMi44MSwwLDUuMTMtLjUzLDYuOTYtMS42LDEuODMtMS4wNywzLjAyLTIuNTksMy41OC00LjU1aDkuNTNjLS45LDQuNTUtMy4xMyw4LjEyLTYuNywxMC43MS0zLjU3LDIuNTktOC4wOCwzLjg4LTEzLjU0LDMuODhaIi8+CiAgICAgICAgPHBhdGggZD0iTTI4MC4xNCw3OC4zOGgtMTAuMjl2LTQxLjY2aDkuNTNsLjg0LDUuNGMxLjI5LTIuMDgsMy4xMy0zLjcxLDUuNTItNC44OSwyLjM5LTEuMTgsNC45OS0xLjc3LDcuOC0xLjc3LDUuMjMsMCw5LjE4LDEuNTUsMTEuODUsNC42NCwyLjY3LDMuMDksNC4wMSw3LjMxLDQuMDEsMTIuNjV2MjUuNjRoLTEwLjI5di0yMy4xOWMwLTMuNDktLjc5LTYuMDgtMi4zNi03LjgtMS41Ny0xLjcxLTMuNzEtMi41Ny02LjQxLTIuNTctMy4yLDAtNS43MSwxLjAxLTcuNTEsMy4wNC0xLjgsMi4wMi0yLjcsNC43Mi0yLjcsOC4xdjIyLjQzWiIvPgogICAgICAgIDxwYXRoIGQ9Ik0zMzYuNjQsNzkuNDhjLTQuMDUsMC03LjUyLS45MS0xMC40MS0yLjc0LTIuOS0xLjgzLTUuMTQtNC4zNy02Ljc1LTcuNjMtMS42LTMuMjYtMi40LTcuMDYtMi40LTExLjM4cy44LTguMTcsMi40LTExLjUxYzEuNi0zLjM0LDMuOTItNS45Nyw2Ljk2LTcuODgsMy4wNC0xLjkxLDYuNjMtMi44NywxMC43OS0yLjg3LDIuOTIsMCw1LjU5LjU4LDguMDEsMS43MywyLjQyLDEuMTUsNC4yNywyLjc3LDUuNTcsNC44NVYxNS42NGgxMC4ydjYyLjc0aC05LjQ1bC0uNjctNi40OWMtMS4yNCwyLjM2LTMuMTQsNC4yMi01LjY5LDUuNTctMi41NiwxLjM1LTUuNDEsMi4wMi04LjU2LDIuMDJaTTMzOC45Miw3MC4wNGMyLjQyLDAsNC41LS41Miw2LjI0LTEuNTYsMS43NC0xLjA0LDMuMTEtMi41Myw0LjA5LTQuNDcuOTgtMS45NCwxLjQ3LTQuMTUsMS40Ny02LjYycy0uNDktNC43NC0xLjQ3LTYuNjJjLS45OC0xLjg4LTIuMzUtMy4zNy00LjA5LTQuNDctMS43NC0xLjEtMy44Mi0xLjY0LTYuMjQtMS42NHMtNC40MS41NS02LjE2LDEuNjRjLTEuNzQsMS4xLTMuMDgsMi42LTQuMDEsNC41MS0uOTMsMS45MS0xLjM5LDQuMS0xLjM5LDYuNThzLjQ2LDQuNjcsMS4zOSw2LjU4Yy45MywxLjkxLDIuMjYsMy40LDQuMDEsNC40NywxLjc0LDEuMDcsMy43OSwxLjYsNi4xNiwxLjZaIi8+CiAgICAgICAgPGc+CiAgICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zOTYuODQsMzcuMjJoLTE3Ljg2di04LjQyYzAtMi40My40MS00LjIyLDEuMjItNS4zMy43Ni0xLjA0LDIuMy0xLjU3LDQuNTktMS41N2g0LjE0di00LjdsLS41NS0uMTFjLS42LS4xMi0xLjI4LS4xOS0yLjA5LS4yMi0uNzctLjAzLTEuNDktLjA0LTIuMTctLjA0LTEuNzksMC0zLjQ4LjM5LTUuMDMsMS4xNy0xLjU4Ljc5LTIuODgsMi4wOS0zLjg4LDMuODYtLjk4LDEuNzUtMS40OCw0LjA5LTEuNDgsNi45NXY4LjQyaC02LjMydjQuNzRoNi4zMnYzNy4xMWg1LjI1di0zNy4xMWgxNy44NnYzNy4xMWg1LjI1VjE2LjgxaC01LjI1djIwLjQxWiIvPgogICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDQ5LjY1LDQ2Ljg5Yy0xLjc5LTMuMjctNC4yNy01Ljg5LTcuMzctNy44LTMuMS0xLjkxLTYuNy0yLjg4LTEwLjY5LTIuODhzLTcuNTEuOTctMTAuNjUsMi44OGMtMy4xMywxLjkxLTUuNjIsNC41NC03LjQxLDcuOC0xLjc5LDMuMjYtMi43LDcuMDUtMi43LDExLjI1cy45MSw3LjkxLDIuNywxMS4yMWMxLjc5LDMuMyw0LjI5LDUuOTQsNy40MSw3Ljg1LDMuMTMsMS45MSw2LjcxLDIuODgsMTAuNjUsMi44OHM3LjU5LS45NywxMC42OS0yLjg4YzMuMS0xLjkxLDUuNTctNC41NSw3LjM3LTcuODQsMS43OS0zLjI5LDIuNy03LjA2LDIuNy0xMS4yMXMtLjkxLTcuOTgtMi43LTExLjI1Wk00MzEuNiw3NS4xN2MtMywwLTUuNjktLjczLTcuOTktMi4xNy0yLjMtMS40NS00LjE0LTMuNDctNS40NS02LjAyLTEuMzItMi41Ni0xLjk5LTUuNTMtMS45OS04Ljg0cy42Ny02LjM1LDEuOTktOC44OGMxLjMxLTIuNTIsMy4xNS00LjUzLDUuNDUtNS45OCwyLjI5LTEuNDQsNC45OC0yLjE3LDcuOTktMi4xN3M1LjY5LjczLDcuOTgsMi4xN2MyLjMsMS40NCw0LjEzLDMuNDYsNS40NSw1Ljk4LDEuMzIsMi41MywxLjk5LDUuNTIsMS45OSw4Ljg4cy0uNjcsNi4yOC0xLjk5LDguODRjLTEuMzIsMi41NS0zLjE1LDQuNTctNS40NSw2LjAyLTIuMywxLjQ0LTQuOTgsMi4xNy03Ljk5LDIuMTdaIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICAgIDxnPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQ0LjA1LjY1TC41NSw0Ny4xNUMuMiw0Ny41MywwLDQ4LjAzLDAsNDguNTV2NC4xN2MwLDEuMTMuOTIsMi4wNSwyLjA1LDIuMDVoODYuOTljMS4xMywwLDIuMDUtLjkyLDIuMDUtMi4wNXYtNC4xN2MwLS41Mi0uMi0xLjAyLS41NS0xLjRMNDcuMDQuNjVjLS44MS0uODctMi4xOC0uODctMi45OSwwWiIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTQ0LjkzLDM5LjA3TDEuNDMsNjQuNTVjLS44NS4yNy0xLjQzLDEuMDYtMS40MywxLjk1djMuNDhjMCwxLjEzLjkyLDIuMDUsMi4wNSwyLjA1aDg2Ljk5YzEuMTMsMCwyLjA1LS45MiwyLjA1LTIuMDV2LTMuNDhjMC0uODktLjU4LTEuNjgtMS40My0xLjk1bC00My41LTI1LjQ4Yy0uNC0uMTMtLjgzLS4xMy0xLjI0LDBaIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDQuOTMsNjguODlMMS40Myw4Mi42NGMtLjg1LjI3LTEuNDMsMS4wNi0xLjQzLDEuOTV2My40OGMwLDEuMTMuOTIsMi4wNSwyLjA1LDIuMDVoODYuOTljMS4xMywwLDIuMDUtLjkyLDIuMDUtMi4wNXYtMy40OGMwLS44OS0uNTgtMS42OC0xLjQzLTEuOTVsLTQzLjUtMTMuNzVjLS40LS4xMy0uODMtLjEzLTEuMjQsMFoiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+";window.SF_LOGO_WHITE="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDUyLjM1IDk3LjciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNkNTNjODY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQtMyk7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQtMik7CiAgICAgIH0KCiAgICAgIC5jbHMtNCB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CgogICAgICAuY2xzLTUgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjQ1LjU1IiB5MT0iMCIgeDI9IjQ1LjU1IiB5Mj0iNTQuNzciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZGU0N2I0Ii8+CiAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2NkMzM1YiIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSI0NS41NCIgeTE9IjM4Ljk4IiB4Mj0iNDUuNTQiIHkyPSI3Mi4wMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlYmM1ZGEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDM3YWE4Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9IjQ1LjU0IiB5MT0iOTAuMTIiIHgyPSI0NS41NCIgeTI9IjY4Ljc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2U3YjhkMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmNGUzZWMiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+CiAgICA8Zz4KICAgICAgPGc+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJNMTE4LjczLDMzLjk0YzAtMy42LjkzLTYuNzcsMi43OC05LjUzLDEuODYtMi43NSw0LjQzLTQuOSw3LjcyLTYuNDUsMy4yOS0xLjU1LDcuMS0yLjMyLDExLjQzLTIuMzJzNy43Ny43MywxMC44NCwyLjE5YzMuMDYsMS40Niw1LjQ1LDMuNTQsNy4xNyw2LjI0LDEuNzIsMi43LDIuNjMsNS45LDIuNzQsOS42MWgtMTAuNzljLS4xMS0yLjY0LTEuMDctNC43MS0yLjg3LTYuMi0xLjgtMS40OS00LjIyLTIuMjMtNy4yNS0yLjIzLTMuMzIsMC01Ljk3Ljc1LTcuOTcsMi4yMy0yLDEuNDktMi45OSwzLjUzLTIuOTksNi4xMSwwLDIuMTkuNiwzLjkyLDEuODEsNS4xOSwxLjIxLDEuMjYsMy4xMSwyLjIxLDUuNjksMi44Mmw5LjcsMi4xOWM1LjI4LDEuMTMsOS4yMiwzLjA1LDExLjgxLDUuNzgsMi41OSwyLjczLDMuODgsNi40LDMuODgsMTEuMDEsMCwzLjc3LS45Myw3LjA4LTIuNzgsOS45NS0xLjg2LDIuODctNC40OCw1LjA3LTcuODksNi42Mi0zLjQsMS41NS03LjM4LDIuMzItMTEuOTMsMi4zMnMtOC4xMi0uNzUtMTEuMzgtMi4yM2MtMy4yNi0xLjQ5LTUuODEtMy41OC03LjYzLTYuMjgtMS44My0yLjctMi44LTUuODctMi45MS05LjUzaDEwLjc5Yy4wNSwyLjU5LDEuMDgsNC42MywzLjA4LDYuMTEsMiwxLjQ5LDQuNzEsMi4yMyw4LjE0LDIuMjNzNi40NS0uNzQsOC41Ni0yLjIzYzIuMTEtMS40OSwzLjE2LTMuNDcsMy4xNi01Ljk1LDAtMi4xNC0uNTYtMy44NC0xLjY5LTUuMS0xLjEzLTEuMjctMi45NS0yLjE1LTUuNDgtMi42NmwtOS43OC0yLjE5Yy01LjIzLTEuMTItOS4xOS0zLjE2LTExLjg5LTYuMTEtMi43LTIuOTUtNC4wNS02LjgyLTQuMDUtMTEuNloiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0xNzAuNjgsOTcuN3YtNjAuOTdoOS41M2wuNjcsNi4zMmMxLjI0LTIuNDIsMy4xNS00LjI5LDUuNzQtNS42MSwyLjU5LTEuMzIsNS40My0xLjk4LDguNTItMS45OCwzLjk5LDAsNy40My45LDEwLjMzLDIuNywyLjg5LDEuOCw1LjE2LDQuMyw2Ljc5LDcuNTEsMS42MywzLjIsMi40NSw3LDIuNDUsMTEuMzhzLS43Niw4LjE4LTIuMjgsMTEuNTVjLTEuNTIsMy4zNy0zLjczLDYuMDMtNi42Miw3Ljk3LTIuOSwxLjk0LTYuNDIsMi45MS0xMC41OCwyLjkxLTMuMDksMC01LjkyLS41OS04LjQ4LTEuNzctMi41Ni0xLjE4LTQuNDgtMi44MS01Ljc4LTQuODl2MjQuODhoLTEwLjI5Wk0xODEuMDUsNTcuNTVjMCwyLjQ4LjQ4LDQuNjcsMS40Myw2LjU4Ljk2LDEuOTEsMi4zMiwzLjQyLDQuMDksNC41MSwxLjc3LDEuMSwzLjg0LDEuNjQsNi4yLDEuNjRzNC41LS41NSw2LjI0LTEuNjRjMS43NC0xLjEsMy4wNi0yLjYsMy45Ni00LjUxLjktMS45MSwxLjM1LTQuMSwxLjM1LTYuNThzLS40NS00LjY3LTEuMzUtNi41OGMtLjktMS45MS0yLjIyLTMuNDItMy45Ni00LjUxLTEuNzQtMS4xLTMuODItMS42NC02LjI0LTEuNjRzLTQuNDMuNTQtNi4yLDEuNmMtMS43NywxLjA3LTMuMTMsMi41Ni00LjA5LDQuNDctLjk2LDEuOTEtMS40Myw0LjEzLTEuNDMsNi42NloiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTUiIGQ9Ik0yNDEuNTIsNzkuNDhjLTQuMSwwLTcuNzUtLjk0LTEwLjkyLTIuODMtMy4xOC0xLjg4LTUuNjYtNC40Ny03LjQ2LTcuNzYtMS44LTMuMjktMi43LTcuMDctMi43LTExLjM0cy44Ny04LjE1LDIuNjEtMTEuNDdjMS43NC0zLjMyLDQuMTktNS45Miw3LjM0LTcuOCwzLjE1LTEuODgsNi43NS0yLjgzLDEwLjc5LTIuODNzNy44NC44OSwxMC44OCwyLjY2YzMuMDQsMS43Nyw1LjM4LDQuMjMsNy4wNCw3LjM4LDEuNjYsMy4xNSwyLjQ5LDYuOTIsMi40OSwxMS4zdjMuMTJsLTM1Ljc2LjA4LjE3LTYuNThoMjUuMzhjMC0yLjg3LS45Mi01LjE3LTIuNzQtNi45MS0xLjgzLTEuNzQtNC4yOS0yLjYxLTcuMzgtMi42MS0yLjQyLDAtNC40Ni41MS02LjExLDEuNTItMS42NiwxLjAxLTIuOTEsMi41My0zLjc1LDQuNTUtLjg0LDIuMDItMS4yNyw0LjUtMS4yNyw3LjQyLDAsNC41Ljk3LDcuOSwyLjkxLDEwLjIsMS45NCwyLjMxLDQuODIsMy40Niw4LjY0LDMuNDYsMi44MSwwLDUuMTMtLjUzLDYuOTYtMS42LDEuODMtMS4wNywzLjAyLTIuNTksMy41OC00LjU1aDkuNTNjLS45LDQuNTUtMy4xMyw4LjEyLTYuNywxMC43MS0zLjU3LDIuNTktOC4wOCwzLjg4LTEzLjU0LDMuODhaIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJNMjgwLjE0LDc4LjM4aC0xMC4yOXYtNDEuNjZoOS41M2wuODQsNS40YzEuMjktMi4wOCwzLjEzLTMuNzEsNS41Mi00Ljg5LDIuMzktMS4xOCw0Ljk5LTEuNzcsNy44LTEuNzcsNS4yMywwLDkuMTgsMS41NSwxMS44NSw0LjY0LDIuNjcsMy4wOSw0LjAxLDcuMzEsNC4wMSwxMi42NXYyNS42NGgtMTAuMjl2LTIzLjE5YzAtMy40OS0uNzktNi4wOC0yLjM2LTcuOC0xLjU3LTEuNzEtMy43MS0yLjU3LTYuNDEtMi41Ny0zLjIsMC01LjcxLDEuMDEtNy41MSwzLjA0LTEuOCwyLjAyLTIuNyw0LjcyLTIuNyw4LjF2MjIuNDNaIi8+CiAgICAgICAgPHBhdGggY2xhc3M9ImNscy01IiBkPSJNMzM2LjY0LDc5LjQ4Yy00LjA1LDAtNy41Mi0uOTEtMTAuNDEtMi43NC0yLjktMS44My01LjE0LTQuMzctNi43NS03LjYzLTEuNi0zLjI2LTIuNC03LjA2LTIuNC0xMS4zOHMuOC04LjE3LDIuNC0xMS41MWMxLjYtMy4zNCwzLjkyLTUuOTcsNi45Ni03Ljg4LDMuMDQtMS45MSw2LjYzLTIuODcsMTAuNzktMi44NywyLjkyLDAsNS41OS41OCw4LjAxLDEuNzMsMi40MiwxLjE1LDQuMjcsMi43Nyw1LjU3LDQuODVWMTUuNjRoMTAuMnY2Mi43NGgtOS40NWwtLjY3LTYuNDljLTEuMjQsMi4zNi0zLjE0LDQuMjItNS42OSw1LjU3LTIuNTYsMS4zNS01LjQxLDIuMDItOC41NiwyLjAyWk0zMzguOTIsNzAuMDRjMi40MiwwLDQuNS0uNTIsNi4yNC0xLjU2LDEuNzQtMS4wNCwzLjExLTIuNTMsNC4wOS00LjQ3Ljk4LTEuOTQsMS40Ny00LjE1LDEuNDctNi42MnMtLjQ5LTQuNzQtMS40Ny02LjYyYy0uOTgtMS44OC0yLjM1LTMuMzctNC4wOS00LjQ3LTEuNzQtMS4xLTMuODItMS42NC02LjI0LTEuNjRzLTQuNDEuNTUtNi4xNiwxLjY0Yy0xLjc0LDEuMS0zLjA4LDIuNi00LjAxLDQuNTEtLjkzLDEuOTEtMS4zOSw0LjEtMS4zOSw2LjU4cy40Niw0LjY3LDEuMzksNi41OGMuOTMsMS45MSwyLjI2LDMuNCw0LjAxLDQuNDcsMS43NCwxLjA3LDMuNzksMS42LDYuMTYsMS42WiIvPgogICAgICAgIDxnPgogICAgICAgICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzk2Ljg0LDM3LjIyaC0xNy44NnYtOC40MmMwLTIuNDMuNDEtNC4yMiwxLjIyLTUuMzMuNzYtMS4wNCwyLjMtMS41Nyw0LjU5LTEuNTdoNC4xNHYtNC43bC0uNTUtLjExYy0uNi0uMTItMS4yOC0uMTktMi4wOS0uMjItLjc3LS4wMy0xLjQ5LS4wNC0yLjE3LS4wNC0xLjc5LDAtMy40OC4zOS01LjAzLDEuMTctMS41OC43OS0yLjg4LDIuMDktMy44OCwzLjg2LS45OCwxLjc1LTEuNDgsNC4wOS0xLjQ4LDYuOTV2OC40MmgtNi4zMnY0Ljc0aDYuMzJ2MzcuMTFoNS4yNXYtMzcuMTFoMTcuODZ2MzcuMTFoNS4yNVYxNi44MWgtNS4yNXYyMC40MVoiLz4KICAgICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0OS42NSw0Ni44OWMtMS43OS0zLjI3LTQuMjctNS44OS03LjM3LTcuOC0zLjEtMS45MS02LjctMi44OC0xMC42OS0yLjg4cy03LjUxLjk3LTEwLjY1LDIuODhjLTMuMTMsMS45MS01LjYyLDQuNTQtNy40MSw3LjgtMS43OSwzLjI2LTIuNyw3LjA1LTIuNywxMS4yNXMuOTEsNy45MSwyLjcsMTEuMjFjMS43OSwzLjMsNC4yOSw1Ljk0LDcuNDEsNy44NSwzLjEzLDEuOTEsNi43MSwyLjg4LDEwLjY1LDIuODhzNy41OS0uOTcsMTAuNjktMi44OGMzLjEtMS45MSw1LjU3LTQuNTUsNy4zNy03Ljg0LDEuNzktMy4yOSwyLjctNy4wNiwyLjctMTEuMjFzLS45MS03Ljk4LTIuNy0xMS4yNVpNNDMxLjYsNzUuMTdjLTMsMC01LjY5LS43My03Ljk5LTIuMTctMi4zLTEuNDUtNC4xNC0zLjQ3LTUuNDUtNi4wMi0xLjMyLTIuNTYtMS45OS01LjUzLTEuOTktOC44NHMuNjctNi4zNSwxLjk5LTguODhjMS4zMS0yLjUyLDMuMTUtNC41Myw1LjQ1LTUuOTgsMi4yOS0xLjQ0LDQuOTgtMi4xNyw3Ljk5LTIuMTdzNS42OS43Myw3Ljk4LDIuMTdjMi4zLDEuNDQsNC4xMywzLjQ2LDUuNDUsNS45OCwxLjMyLDIuNTMsMS45OSw1LjUyLDEuOTksOC44OHMtLjY3LDYuMjgtMS45OSw4Ljg0Yy0xLjMyLDIuNTUtMy4xNSw0LjU3LTUuNDUsNi4wMi0yLjMsMS40NC00Ljk4LDIuMTctNy45OSwyLjE3WiIvPgogICAgICAgIDwvZz4KICAgICAgPC9nPgogICAgICA8Zz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik00NC4wNS42NUwuNTUsNDcuMTVDLjIsNDcuNTMsMCw0OC4wMywwLDQ4LjU1djQuMTdjMCwxLjEzLjkyLDIuMDUsMi4wNSwyLjA1aDg2Ljk5YzEuMTMsMCwyLjA1LS45MiwyLjA1LTIuMDV2LTQuMTdjMC0uNTItLjItMS4wMi0uNTUtMS40TDQ3LjA0LjY1Yy0uODEtLjg3LTIuMTgtLjg3LTIuOTksMFoiLz4KICAgICAgICA8cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik00NC45MywzOS4wN0wxLjQzLDY0LjU1Yy0uODUuMjctMS40MywxLjA2LTEuNDMsMS45NXYzLjQ4YzAsMS4xMy45MiwyLjA1LDIuMDUsMi4wNWg4Ni45OWMxLjEzLDAsMi4wNS0uOTIsMi4wNS0yLjA1di0zLjQ4YzAtLjg5LS41OC0xLjY4LTEuNDMtMS45NWwtNDMuNS0yNS40OGMtLjQtLjEzLS44My0uMTMtMS4yNCwwWiIvPgogICAgICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ0LjkzLDY4Ljg5TDEuNDMsODIuNjRjLS44NS4yNy0xLjQzLDEuMDYtMS40MywxLjk1djMuNDhjMCwxLjEzLjkyLDIuMDUsMi4wNSwyLjA1aDg2Ljk5YzEuMTMsMCwyLjA1LS45MiwyLjA1LTIuMDV2LTMuNDhjMC0uODktLjU4LTEuNjgtMS40My0xLjk1bC00My41LTEzLjc1Yy0uNC0uMTMtLjgzLS4xMy0xLjI0LDBaIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==";
(function(){
"use strict";
var CFG = window.SF_BUILDER || {};
var PAGE_W = CFG.pageW || 794;
var PAGE_H = CFG.pageH || 1123;              // logical page height (A4). flow mode ignores for canvas height.
var PAGED  = CFG.mode === 'paged';

/* ---------------- CSS ---------------- */
var CSS = `
:root{--maroon:#390021;--mag:#e92589;--g1:#f34db2;--g2:#e01659;--grad:linear-gradient(135deg,#e92589,#f34db2);
--page:#f4f3f1;--card:#fff;--ink:#1a1a1a;--ink2:#575757;--ink3:#8b8b8b;--blush:#fdeef6;--em:#1fa97e;--line:#e7e3df;
--ui-bg:#f7f7f8;--ui-panel:#fff;--ui-panel2:#f1f1f3;--ui-line:#e4e4e7;--ui-txt:#18181b;--ui-txt2:#52525b;--ui-txt3:#a1a1aa}
*{box-sizing:border-box}
html,body{margin:0;height:100%}
body{font-family:Inter,system-ui,-apple-system,'Segoe UI',sans-serif;background:var(--ui-bg);color:var(--ui-txt);overflow:hidden}
button{font-family:inherit;cursor:pointer;border:0;background:none;color:inherit}
input,textarea,select{font-family:inherit}
.mono{font-family:"IBM Plex Mono",ui-monospace,monospace}
.app{display:grid;grid-template-rows:52px 1fr;height:100%}
.app.preview{grid-template-rows:52px 1fr}
.top{display:flex;align-items:center;gap:12px;padding:0 14px;background:var(--ui-panel);border-bottom:1px solid var(--ui-line)}
.brand{display:flex;align-items:center;gap:9px;font-weight:600;font-size:14px}
.brand .dot{width:9px;height:9px;border-radius:50%;background:var(--grad)}
.brand small{font-weight:500;color:var(--ui-txt3);font-size:12px}
.top .sp{flex:1}
.savei{font-size:12px;color:var(--ui-txt3);display:flex;align-items:center;gap:6px;margin-right:2px}
.savei .d{width:6px;height:6px;border-radius:50%;background:var(--em)}
.tbtn{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px;border-radius:8px;font-size:13px;font-weight:500;color:var(--ui-txt2);border:1px solid var(--ui-line);background:var(--ui-panel2);transition:.14s}
.tbtn:hover{color:var(--ui-txt);border-color:#c8c8cc}
.tbtn.primary{background:#18181b;color:#fff;border:0}
.tbtn.primary:hover{background:#000}
.tbtn.icon{width:34px;padding:0;justify-content:center}
.tbtn:disabled{opacity:.4;cursor:default}
.tbtn svg{width:15px;height:15px}
.menu{position:relative}
.menu .pop{position:absolute;top:38px;right:0;min-width:236px;background:var(--ui-panel);border:1px solid var(--ui-line);border-radius:12px;padding:6px;box-shadow:0 20px 50px rgba(0,0,0,.18);z-index:60;display:none}
.menu.open .pop{display:block}
.menu .pop button{display:flex;align-items:center;gap:10px;width:100%;text-align:left;padding:9px 11px;border-radius:8px;font-size:13px;color:var(--ui-txt2);font-weight:500}
.menu .pop button:hover{background:var(--ui-panel2);color:var(--ui-txt)}
.menu .pop .hd{padding:8px 11px 4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600}
.menu .pop svg{width:15px;height:15px;opacity:.8}
.menu .pop hr{border:0;border-top:1px solid var(--ui-line);margin:6px 4px}
.body{display:grid;grid-template-columns:262px 1fr 310px;min-height:0}
.app.preview .body{grid-template-columns:0 1fr 0}
.app.preview .left,.app.preview .right{display:none}
.pane{min-height:0;overflow:auto}
.pane::-webkit-scrollbar{width:10px}.pane::-webkit-scrollbar-thumb{background:#c8c8cc;border-radius:8px;border:3px solid transparent;background-clip:padding-box}
.left{background:var(--ui-panel);border-right:1px solid var(--ui-line)}
.right{background:var(--ui-panel);border-left:1px solid var(--ui-line)}
.center{background:#e9e9ec;position:relative}
.side-h{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600;padding:15px 16px 8px}
.pgroup{padding:0 12px 10px;display:grid;grid-template-columns:1fr 1fr;gap:7px}
.pblock{display:flex;flex-direction:column;align-items:flex-start;gap:7px;padding:11px 10px;border-radius:9px;text-align:left;color:var(--ui-txt2);font-size:12px;font-weight:500;border:1px solid var(--ui-line);background:var(--ui-panel);transition:.13s}
.pblock:hover{background:var(--ui-panel2);color:var(--ui-txt);border-color:#c8c8cc;transform:translateY(-1px)}
.pblock .pi{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:var(--ui-panel2);color:#18181b}
.pblock .pi svg{width:16px;height:16px}
.tree{padding:0 12px 24px}
.titem{display:flex;align-items:center;gap:8px;padding:8px 9px;border-radius:8px;font-size:12.5px;font-weight:500;color:var(--ui-txt2);cursor:grab;border:1px solid transparent}
.titem:hover{background:var(--ui-panel2)}
.titem.sel{background:#efeff1;color:#18181b;border-color:#d4d4d8;box-shadow:inset 2px 0 0 #18181b}
.titem.hidden{opacity:.45}
.titem .dr{color:var(--ui-txt3);display:flex}.titem .dr svg{width:13px;height:13px}
.titem .nm{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.titem .tt{font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600}
.titem.drop-above{box-shadow:inset 0 2px 0 #18181b}.titem.drop-below{box-shadow:inset 0 -2px 0 #18181b}
.canvas-wrap{position:absolute;inset:0;overflow:auto;padding:40px;display:flex;justify-content:safe center;align-items:flex-start}
.canvas-wrap::-webkit-scrollbar{width:12px;height:12px}.canvas-wrap::-webkit-scrollbar-thumb{background:#c8c8cc;border-radius:8px;border:3px solid transparent;background-clip:padding-box}
.stage-sizer{position:relative;flex:none}
.stage{transform-origin:0 0;position:absolute;top:0;left:0;will-change:transform}
.sheet{width:var(--sheet-w);background:#fff;color:var(--ink);box-shadow:0 12px 40px rgba(0,0,0,.14);position:relative}
.sheet.paged{min-height:var(--sheet-h)}
.sheet,.sheet *{-webkit-font-smoothing:antialiased}
.pbreak{position:absolute;left:0;right:0;height:0;border-top:1px dashed #c9b8c4;pointer-events:none;z-index:6;display:none}
.editing .pbreak{display:block}
.pbreak::after{content:"Page break";position:absolute;right:6px;top:-16px;font-size:9px;letter-spacing:.05em;color:#b06a93;background:#fff;padding:0 5px}
.zoombar{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:2px;background:var(--ui-panel);border:1px solid var(--ui-line);border-radius:10px;padding:4px;z-index:20;box-shadow:0 6px 18px rgba(0,0,0,.08)}
.zoombar button{width:30px;height:28px;border-radius:7px;display:grid;place-items:center;color:var(--ui-txt2)}
.zoombar button:hover{background:var(--ui-panel2);color:#18181b}
.zoombar .zl{width:auto;padding:0 8px;font-size:12px;font-weight:500}
.zoombar svg{width:15px;height:15px}.zoombar .zsep{width:1px;height:18px;background:var(--ui-line);margin:0 4px}
/* block chrome */
.blk{position:relative;outline:2px solid transparent;transition:outline-color .12s}
.blk[data-hidden="1"]{display:none}
.editing .blk:hover{outline-color:rgba(24,24,27,.2)}
.editing .blk.sel{outline-color:#18181b}
.blk .btools{position:absolute;top:6px;right:6px;display:none;gap:3px;background:rgba(24,20,27,.92);border-radius:8px;padding:3px;z-index:8}
.editing .blk.sel .btools,.editing .blk:hover .btools{display:flex}
.blk .btools button{width:26px;height:24px;border-radius:6px;display:grid;place-items:center;color:#e9e2ee}
.blk .btools button:hover{background:rgba(255,255,255,.16);color:#fff}
.blk .btools button.danger:hover{background:#b3123f}
.blk .btools svg{width:14px;height:14px}
.blk .badge{position:absolute;top:6px;left:6px;display:none;font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#18181b;padding:3px 7px;border-radius:6px;z-index:8}
.editing .blk.sel .badge{display:block}
.blk .dz{position:absolute;inset:0;display:none;align-items:center;justify-content:center;background:rgba(233,37,137,.08);border:2px dashed var(--mag);color:var(--mag);font-size:13px;font-weight:600;z-index:7;pointer-events:none}
.blk.dragover .dz{display:flex}
[contenteditable]{outline:none}
.editing [contenteditable]:hover{background:rgba(24,24,27,.045);border-radius:3px}
.editing [contenteditable]:focus{background:rgba(24,24,27,.06);box-shadow:0 0 0 1px rgba(24,24,27,.32);border-radius:3px}
/* inspector */
.itabs{display:flex;gap:4px;padding:12px 14px 0}
.itabs button{flex:1;height:32px;border-radius:8px;font-size:12.5px;font-weight:500;color:var(--ui-txt2);background:var(--ui-panel2)}
.itabs button.on{background:#18181b;color:#fff}
.isec{border-bottom:1px solid var(--ui-line);padding:14px}
.isec .ih{font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600;margin-bottom:11px}
.field{margin-bottom:11px}
.field label{display:block;font-size:11.5px;font-weight:500;color:var(--ui-txt2);margin-bottom:5px}
.field input[type=text],.field textarea,.field select{width:100%;background:var(--ui-panel2);border:1px solid var(--ui-line);border-radius:8px;color:var(--ui-txt);font-size:13px;padding:8px 10px}
.field textarea{resize:vertical;min-height:64px;line-height:1.45}
.field input:focus,.field textarea:focus,.field select:focus{outline:none;border-color:#18181b}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.swatches{display:flex;gap:7px;flex-wrap:wrap;align-items:center}
.sw{width:26px;height:26px;border-radius:7px;border:2px solid var(--ui-line);cursor:pointer}
.sw.on{border-color:#fff;box-shadow:0 0 0 2px #18181b}
.hexin{width:92px!important;text-transform:uppercase}
.toggle{display:flex;align-items:center;justify-content:space-between;padding:7px 0;font-size:12.5px;font-weight:500;color:var(--ui-txt2)}
.sw-t{width:38px;height:22px;border-radius:100px;background:var(--ui-panel2);border:1px solid var(--ui-line);position:relative;transition:.15s;flex:none}
.sw-t::after{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--ui-txt3);transition:.15s}
.sw-t.on{background:#18181b;border-color:transparent}.sw-t.on::after{left:18px;background:#fff}
.seg{display:flex;background:var(--ui-panel2);border:1px solid var(--ui-line);border-radius:8px;padding:3px;gap:3px}
.seg button{flex:1;height:26px;border-radius:6px;font-size:12px;font-weight:500;color:var(--ui-txt2);display:grid;place-items:center}
.seg button.on{background:#18181b;color:#fff}.seg svg{width:14px;height:14px}
.rng{display:flex;align-items:center;gap:10px}.rng input[type=range]{flex:1;accent-color:#18181b}
.mini-add{display:flex;align-items:center;gap:6px;font-size:12px;font-weight:500;color:#18181b;padding:7px 0;margin-top:4px}.mini-add svg{width:14px;height:14px}
.repeat{border:1px solid var(--ui-line);border-radius:9px;padding:10px;margin-bottom:9px;position:relative;background:var(--ui-panel2)}
.repeat .rx{position:absolute;top:7px;right:7px;width:22px;height:22px;border-radius:6px;display:grid;place-items:center;color:var(--ui-txt3)}
.repeat .rx:hover{background:#b3123f;color:#fff}.repeat .rx svg{width:12px;height:12px}
.upl{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.upl .ub{font-size:12px;font-weight:500;color:var(--ui-txt2);border:1px solid var(--ui-line);background:var(--ui-panel2);border-radius:7px;padding:7px 11px}
.upl .ub:hover{border-color:#18181b;color:#18181b}
.thumb{width:100%;height:84px;border-radius:8px;border:1px solid var(--ui-line);object-fit:cover;margin-bottom:8px;background:var(--ui-panel2)}
.empty{padding:40px 20px;text-align:center;color:var(--ui-txt3);font-size:13px}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:#18181b;color:#fff;font-size:13px;font-weight:500;padding:11px 18px;border-radius:10px;box-shadow:0 16px 40px rgba(0,0,0,.3);opacity:0;pointer-events:none;transition:.25s;z-index:200;display:flex;align-items:center;gap:9px}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast svg{width:16px;height:16px;color:#4ade80}
.modal{position:fixed;inset:0;background:rgba(10,6,12,.5);backdrop-filter:blur(3px);display:none;place-items:center;z-index:150;padding:24px}
.modal.open{display:grid}
.modal .box{background:var(--ui-panel);border:1px solid var(--ui-line);border-radius:16px;width:min(460px,100%);padding:22px;box-shadow:0 30px 80px rgba(0,0,0,.3)}
.modal h3{margin:0 0 6px;font-size:17px;font-weight:600}.modal p{margin:0 0 16px;font-size:13px;color:var(--ui-txt2)}
.modal input[type=text]{width:100%;background:var(--ui-panel2);border:1px solid var(--ui-line);border-radius:9px;color:var(--ui-txt);font-size:14px;padding:11px 13px;margin-bottom:16px}
.modal .tpl-list{max-height:320px;overflow:auto;margin-bottom:14px}
.modal .tpl{display:flex;align-items:center;gap:12px;padding:11px;border-radius:10px;border:1px solid var(--ui-line);margin-bottom:8px;cursor:pointer}
.modal .tpl:hover{border-color:#18181b;background:var(--ui-panel2)}
.modal .tpl .th{width:42px;height:56px;border-radius:5px;flex:none;background:var(--maroon);overflow:hidden;position:relative}
.modal .tpl .th i{position:absolute;left:5px;right:5px;background:rgba(255,255,255,.5);height:3px;border-radius:2px}
.modal .tpl .nm{font-size:13.5px;font-weight:600}.modal .tpl small{display:block;color:var(--ui-txt3);font-weight:500;font-size:11.5px}
.modal .tpl .del{margin-left:auto;color:var(--ui-txt3);width:26px;height:26px;border-radius:6px;display:grid;place-items:center}
.modal .tpl .del:hover{background:#b3123f;color:#fff}
.modal .mfoot{display:flex;justify-content:flex-end;gap:9px}.modal .mfoot .tbtn{height:36px}
.exit-preview{position:absolute;top:14px;right:14px;z-index:30}
`;

/* ---------------- shell ---------------- */
var SHELL = `
<div class="app" id="app">
  <div class="top">
    <div class="brand"><span class="dot"></span>${CFG.title||'Builder'} <small>Spendflo</small></div>
    <span class="savei" id="saveI"><span class="d"></span>Saved</span>
    <div class="sp"></div>
    <button class="tbtn icon" id="bUndo" title="Undo (Ctrl/Cmd Z)">{ic:undo}</button>
    <button class="tbtn icon" id="bRedo" title="Redo (Ctrl/Cmd Shift Z)">{ic:redo}</button>
    <button class="tbtn" id="bTpl">{ic:grid} Templates</button>
    <button class="tbtn" id="bSaveTpl">{ic:bookmark} Save template</button>
    <button class="tbtn" id="bPreview">{ic:eye} Preview</button>
    <div class="menu" id="expMenu">
      <button class="tbtn primary" id="bExp">{ic:download} Export {ic:chev}</button>
      <div class="pop">
        <div class="hd">Download</div>
        <button data-exp="pdf">{ic:file} PDF${PAGED?' · A4':''}</button>
        <button data-exp="png">{ic:image} PNG · image</button>
        <button data-exp="html">{ic:code} HTML · responsive</button>
        <button data-exp="copyhtml">{ic:code} Copy HTML</button>
        <hr/><div class="hd">Editable design</div>
        <button data-exp="json">{ic:braces} Design file (.json)</button>
        <button data-exp="import">{ic:upload} Import design…</button>
      </div>
    </div>
  </div>
  <div class="body">
    <div class="pane left">
      <div class="side-h">Add block</div>
      <div class="pgroup" id="palette"></div>
      <div class="side-h">Document <span class="mono" style="float:right;font-weight:500;text-transform:none" id="tcount"></span></div>
      <div class="tree" id="tree"></div>
    </div>
    <div class="pane center" id="center">
      <div class="canvas-wrap" id="cwrap">
        <div class="stage-sizer" id="sizer"><div class="stage" id="stage">
          <div class="sheet editing ${PAGED?'paged':''}" id="sheet"></div>
        </div></div>
      </div>
      <button class="tbtn primary exit-preview" id="bExit" style="display:none">{ic:x} Exit preview</button>
      <div class="zoombar">
        <button id="zOut">{ic:minus}</button><button class="zl" id="zLbl">100%</button><button id="zIn">{ic:plus}</button>
        <span class="zsep"></span><button id="zFit" title="Fit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg></button>
      </div>
    </div>
    <div class="pane right"><div id="insp"></div></div>
  </div>
</div>
<div class="toast" id="toast">{ic:check}<span id="toastMsg">Saved</span></div>
<input type="file" id="fileImg" accept="image/*" style="display:none"/>
<input type="file" id="fileLogo" accept="image/*,image/svg+xml" style="display:none"/>
<input type="file" id="fileJson" accept="application/json,.json" style="display:none"/>
<div class="modal" id="tplModal"><div class="box"><h3>Templates</h3><p>Start from a ready-made layout.</p><div class="tpl-list" id="tplList"></div><div class="mfoot"><button class="tbtn" data-close>Close</button></div></div></div>
<div class="modal" id="saveModal"><div class="box"><h3>Save as template</h3><p>Store the current layout in this browser to reuse later.</p><input type="text" id="tplName" placeholder="Template name" maxlength="48"/><div class="mfoot"><button class="tbtn" data-close>Cancel</button><button class="tbtn primary" id="tplSaveGo">Save template</button></div></div></div>
`;

/* ---------------- icons ---------------- */
var IC={
 undo:'<path d="M3 7v6h6"/><path d="M3 13a9 9 0 1 0 3-7.7L3 8"/>',
 redo:'<path d="M21 7v6h-6"/><path d="M21 13a9 9 0 1 1-3-7.7L21 8"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
 eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
 download:'<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16"/>',chev:'<path d="m6 9 6 6 6-6"/>',
 file:'<path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/>',image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 16-5-5L5 20"/>',
 code:'<path d="m8 6-5 6 5 6M16 6l5 6-5 6"/>',braces:'<path d="M7 4a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2"/>',
 upload:'<path d="M12 21V9m0 0-4 4m4-4 4 4M4 3h16"/>',minus:'<path d="M5 12h14"/>',plus:'<path d="M12 5v14M5 12h14"/>',
 check:'<path d="M20 6 9 17l-5-5"/>',x:'<path d="M6 6 18 18M18 6 6 18"/>',
 drag:'<circle cx="9" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="18" r="1"/>',
 up:'<path d="M12 19V5m0 0-6 6m6-6 6 6"/>',dn:'<path d="M12 5v14m0 0 6-6m-6 6-6-6"/>',dup:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M4 16V4h12"/>',trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 14h10l1-14"/>',
 eyeoff:'<path d="M3 3 21 21M10.5 5.2A10 10 0 0 1 22 12a17 17 0 0 1-3 3.8M6.6 6.6A17 17 0 0 0 2 12s4 7 10 7a10 10 0 0 0 4-.8"/>',
 alignL:'<path d="M4 6h16M4 12h10M4 18h13"/>',alignC:'<path d="M4 6h16M7 12h10M6 18h12"/>',alignR:'<path d="M4 6h16M10 12h10M7 18h13"/>',
 layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',type:'<path d="M4 6h16M12 6v14M9 20h6"/>',text:'<path d="M4 6h16M4 12h16M4 18h11"/>',
 cta:'<rect x="3" y="8" width="18" height="8" rx="4"/>',cols:'<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="16" rx="1"/>',
 quote:'<path d="M7 7H4v6h5V9c0 2-1 3-3 4M17 7h-3v6h5V9c0 2-1 3-3 4"/>',hash:'<path d="M6 4 5 20M14 4l-1 16M4 9h16M3 15h16"/>',
 list:'<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',hr:'<path d="M3 12h18"/>',space:'<path d="M8 7 12 3l4 4M8 17l4 4 4-4M12 3v18"/>',
 flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V4"/>',footer:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 15h18"/>',
 star:'<path d="M12 3l2.6 6.3L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.4-.7z"/>',block:'<rect x="4" y="4" width="16" height="16" rx="2"/>'
};
var SVG=function(k,cls){return '<svg class="'+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">'+(IC[k]||IC.block)+'</svg>';};

/* ---------------- helpers ---------------- */
var $=function(q,el){return (el||document).querySelector(q);},$$=function(q,el){return [].slice.call((el||document).querySelectorAll(q));};
var uid=function(){return Math.random().toString(36).slice(2,9);};
var clone=function(o){return JSON.parse(JSON.stringify(o));};
var esc=function(s){return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
function setPath(o,p,v){var k=p.split('.'),t=o;for(var i=0;i<k.length-1;i++)t=t[k[i]];t[k[k.length-1]]=v;}
function getPath(o,p){return p.split('.').reduce(function(a,k){return a==null?a:a[k];},o);}

/* ---------------- logo (inline SVG => survives html2canvas & embeds in HTML) ---------------- */
function logoSVG(variant){var uri=variant==='black'?window.SF_LOGO_BLACK:window.SF_LOGO_WHITE;
  try{var raw=atob(uri.split(',')[1]);try{raw=decodeURIComponent(escape(raw));}catch(e){}return raw.slice(raw.indexOf('<svg'));}catch(e){return '<img src="'+uri+'" alt="Spendflo"/>';}}
function logoMarkup(b){
  var custom = b.logoImg || '';
  if(custom) return '<img class="lgimg" src="'+custom+'" alt="logo"/>';
  var v = b.logoVar; if(v==='auto'||!v){ v = isDark(b.bg)?'white':'black'; }
  return logoSVG(v);
}
function isDark(hex){ if(!hex) return false; var h=hex.replace('#',''); if(h.length===3)h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2]; var r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),bl=parseInt(h.slice(4,6),16); return (0.299*r+0.587*g+0.114*bl) < 140; }

/* ---------------- mount ---------------- */
var PAD = PAGE_W>=700?56:28;
function mount(){
  var st=document.createElement('style'); st.textContent=CSS+BLOCK_CSS; document.head.appendChild(st);
  document.body.innerHTML=SHELL.replace(/\{ic:(\w+)\}/g,function(m,k){return SVG(k);});
  document.documentElement.style.setProperty('--sheet-w',PAGE_W+'px');
  document.documentElement.style.setProperty('--sheet-h',PAGE_H+'px');
}

/* ---------------- block render utils ---------------- */
var ce=function(f,v,tag){return '<'+(tag||'span')+' contenteditable data-f="'+f+'">'+esc(v)+'</'+(tag||'span')+'>';};
function opStyle(b){var s='--pt:'+b.pt+'px;--pb:'+b.pb+'px;';if(b.bg)s+='background:'+b.bg+';';if(b.fg)s+='color:'+b.fg+';';return s;}
function alignCls(b){return b.align==='center'?'al-c':b.align==='right'?'al-r':'';}
function fsz(b,base){return (b.fs?b.fs:base);}

/* ---------------- block CSS ---------------- */
var BLOCK_CSS = `
.op{padding:var(--pt) ${PAD}px var(--pb);position:relative}
.al-c{text-align:center}.al-r{text-align:right}
.b-eyebrow{font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:var(--mag);margin:0 0 12px}
.b-head h2{font-size:26px;line-height:1.16;font-weight:500;letter-spacing:-.02em;color:inherit;margin:0}
.b-text p{font-size:15px;line-height:1.62;color:inherit;margin:0 0 12px}.b-text p:last-child{margin-bottom:0}
.b-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px ${PAD}px}
.b-header .lg{height:26px;display:flex;align-items:center}.b-header .lg svg,.b-header .lg .lgimg{height:26px;width:auto;display:block}
.b-header .rt{font-size:12.5px;font-weight:500;opacity:.85}
.b-cover{padding:64px ${PAD}px;background:var(--maroon);color:#fff}
.b-cover .lg{height:28px;margin-bottom:auto;display:flex}.b-cover .lg svg,.b-cover .lg .lgimg{height:28px;width:auto}
.b-cover .pill{display:inline-block;font-size:11px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:#fff;background:var(--grad);border-radius:100px;padding:6px 14px;margin-bottom:20px}
.b-cover h1{font-size:44px;line-height:1.05;font-weight:500;letter-spacing:-.03em;margin:0}
.b-cover .sub{font-size:16px;line-height:1.55;opacity:.85;margin:18px 0 0;max-width:60ch}
.b-cover .lgrow{display:flex;margin-bottom:34px}
.b-img{padding:var(--pt) ${PAD}px var(--pb)}
.b-img .imgwrap{border-radius:12px;overflow:hidden;background:#f1eef0}
.b-img img{width:100%;height:auto;display:block}
.b-img .cap{font-size:12px;color:var(--ink3);margin-top:8px}
.b-btn{padding:var(--pt) ${PAD}px var(--pb)}
.b-btn .btns{display:flex;gap:12px;flex-wrap:wrap}
.al-c .btns{justify-content:center}.al-r .btns{justify-content:flex-end}
.cbtn{display:inline-block;font-size:14px;font-weight:500;padding:13px 26px;border-radius:10px;text-decoration:none}
.cbtn.pri{background:var(--grad);color:#fff}.cbtn.sec{background:transparent;border:1.5px solid currentColor;color:inherit}
.b-cols .cwrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
.b-cols .c-img{border-radius:12px;overflow:hidden;background:#f1eef0}.b-cols .c-img img{width:100%;height:auto;display:block}
.b-cols h3{font-size:18px;font-weight:500;letter-spacing:-.01em;margin:0 0 8px;color:inherit}
.b-cols p{font-size:14px;line-height:1.6;color:inherit;opacity:.92;margin:0}
.b-quote blockquote{font-size:20px;line-height:1.45;font-weight:500;letter-spacing:-.01em;color:inherit;margin:0;border-left:3px solid var(--mag);padding-left:18px}
.b-quote .who{font-size:13px;color:var(--ink3);margin-top:12px;padding-left:18px}
.b-list ul{margin:0;padding:0;list-style:none}
.b-list li{font-size:14.5px;line-height:1.5;color:inherit;padding-left:26px;position:relative;margin-bottom:9px}
.b-list li::before{content:"";position:absolute;left:4px;top:8px;width:7px;height:7px;border-radius:50%;background:var(--mag)}
.b-stats .sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:28px;align-items:start}
.al-c .sgrid,.al-r .sgrid{grid-auto-flow:column}
.b-stats .v{font-size:34px;font-weight:600;letter-spacing:-.02em;line-height:1.05;color:var(--maroon)}
.b-stats .c{font-size:13px;color:inherit;opacity:.72;margin-top:8px;line-height:1.45}
.b-div{padding:var(--pt) ${PAD}px var(--pb)}.b-div hr{border:0;border-top:1px solid var(--line);margin:0}
.b-space{width:100%}
.b-footer{background:var(--maroon);color:#fff;padding:30px ${PAD}px;display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
.b-footer .lg{height:22px;display:flex}.b-footer .lg svg,.b-footer .lg .lgimg{height:22px;width:auto}
.b-footer .links{display:flex;gap:18px;font-size:13px;opacity:.85;flex-wrap:wrap}
.b-footer .dis{font-size:11px;opacity:.6;width:100%;line-height:1.5}
/* ===== variant selector ===== */
.vseg{display:flex;flex-wrap:wrap;gap:6px}
.vseg button{font-size:11.5px;font-weight:500;color:var(--ui-txt2);border:1px solid var(--ui-line);background:var(--ui-panel2);border-radius:7px;padding:6px 10px}
.vseg button.on{background:#18181b;color:#fff;border-color:#18181b}
.tblops{display:flex;gap:6px;flex-wrap:wrap}.tblops .ub{font-size:11.5px}
/* ===== cover full-page + gate motif ===== */
.b-cover{position:relative;overflow:hidden;background:linear-gradient(150deg,#37001f 0%,#6d0a3f 46%,#a5105a 78%,#c9186b 100%);color:#fff}
.b-cover.full{min-height:var(--sheet-h);display:flex;flex-direction:column;justify-content:flex-start}
.b-cover.v-minimal{background:var(--maroon)}
.b-cover .grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:34px 34px;pointer-events:none}
.b-cover .glow{position:absolute;left:50%;top:52%;width:74%;height:56%;transform:translate(-50%,-50%);background:radial-gradient(closest-side,rgba(233,37,137,.55),transparent);filter:blur(34px);pointer-events:none}
.b-cover .gate{position:absolute;left:50%;bottom:5%;transform:translateX(-50%);width:80%;max-width:660px;pointer-events:none}
.b-cover.v-minimal .gate,.b-cover.v-minimal .grid{display:none}
.b-cover.v-split .gate{width:44%;right:-4%;left:auto;bottom:auto;top:50%;transform:translateY(-50%)}
.b-cover .cvin{position:relative;z-index:2}
.b-cover .wpk{font-size:12px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;margin:0}
.b-cover .rule{height:1px;background:rgba(255,255,255,.34);margin:20px 0}
.b-cover h1{font-size:46px;line-height:1.06;font-weight:600;letter-spacing:-.02em;margin:0}
.b-cover .sub{font-style:italic;font-size:16px;opacity:.86;margin:0}
/* ===== section heading variants ===== */
.b-head.v-numbered{display:flex;gap:18px;align-items:flex-start}
.b-head.v-numbered .snum{font-size:30px;font-weight:600;color:var(--mag);line-height:1.05;letter-spacing:-.02em;flex:none}
.b-head.v-numbered .htext{flex:1}
.b-head.v-underline h2{padding-bottom:12px;border-bottom:2px solid var(--mag);display:inline-block}
/* ===== quote variants ===== */
.b-quote.v-card{margin:0 ${PAD}px;padding:28px;background:var(--blush);border-radius:14px;width:auto}
.b-quote.v-card{padding-left:28px;padding-right:28px}
.b-quote.v-card blockquote{border:0;padding-left:0;font-size:19px}
.b-quote .qm{font-size:46px;line-height:.5;color:var(--mag);font-weight:600;display:block;height:24px}
.b-quote .spk{display:flex;align-items:center;gap:11px;margin-top:16px;padding-left:18px}
.b-quote.v-card .spk{padding-left:0}
.b-quote .spk .av{width:38px;height:38px;border-radius:50%;background:var(--grad);flex:none;display:grid;place-items:center;color:#fff;font-weight:600;font-size:14px}
.b-quote .spk .nm{font-size:13px;font-weight:600;color:inherit}.b-quote .spk .rl{font-size:12px;color:var(--ink3)}
/* ===== stats variants ===== */
.b-stats.v-bold .sgrid>div{border-left:2px solid var(--line);padding-left:18px}
.b-stats.v-bold .v{font-size:40px}
.b-stats.v-cards .sgrid{gap:16px}
.b-stats.v-cards .sgrid>div{background:var(--blush);border-radius:12px;padding:20px}
.b-stats .src{font-size:11px;color:var(--ink3);margin-top:16px;font-style:italic}
/* ===== callout ===== */
.b-callout .co{border-radius:12px}
.b-callout.v-line .co{border-left:3px solid var(--mag);padding:4px 0 4px 20px}
.b-callout.v-box .co{background:var(--blush);border:1px solid #f4dcec;padding:24px}
.b-callout.v-dark .co{background:var(--maroon);color:#fff;padding:26px}
.b-callout .lbl{font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--mag);margin:0 0 10px}
.b-callout.v-dark .lbl{color:var(--g1)}
.b-callout .stmt{font-size:17px;line-height:1.5;font-weight:500;margin:0}
.b-callout .stmt.s2{margin-top:10px;font-weight:400;font-size:15px;opacity:.9}
/* ===== compare (✗ / ✓) ===== */
.b-compare .cg{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.b-compare .col{border-radius:12px;padding:20px;border:1px solid var(--line)}
.b-compare.v-cards .col.neg{background:#fdf2f4;border-color:#f6d6de}.b-compare.v-cards .col.pos{background:#f0faf5;border-color:#cdeee0}
.b-compare.v-plain .col{background:none;border:0;padding:0}
.b-compare .ch{font-size:12px;font-weight:600;letter-spacing:.03em;text-transform:uppercase;margin:0 0 13px}
.b-compare .col.neg .ch{color:#c1123f}.b-compare .col.pos .ch{color:#1c9c74}
.b-compare ul{margin:0;padding:0;list-style:none}
.b-compare li{font-size:13.5px;line-height:1.5;padding-left:24px;position:relative;margin-bottom:10px;color:var(--ink2)}
.b-compare .col.neg li::before{content:"✗";position:absolute;left:0;top:0;color:#dc2b57;font-weight:700}
.b-compare .col.pos li::before{content:"✓";position:absolute;left:0;top:0;color:#1c9c74;font-weight:700}
/* ===== table ===== */
.b-table table{width:100%;border-collapse:collapse;font-size:13px}
.b-table th{text-align:left;font-weight:600;color:var(--ink);padding:11px 12px;border-bottom:2px solid var(--maroon);font-size:11px;letter-spacing:.03em;text-transform:uppercase}
.b-table td{padding:11px 12px;border-bottom:1px solid var(--line);color:var(--ink2);line-height:1.45;vertical-align:top}
.b-table.v-striped tbody tr:nth-child(even) td{background:#faf7f9}
.b-table td:first-child{font-weight:500;color:var(--ink)}
/* ===== steps (roadmap) ===== */
.b-steps .st{display:flex;gap:18px;margin-bottom:22px}.b-steps .st:last-child{margin-bottom:0}
.b-steps .n{flex:none;width:44px;height:44px;border-radius:11px;background:var(--maroon);color:#fff;display:grid;place-items:center;font-weight:600;font-size:16px}
.b-steps.v-round .n{border-radius:50%;background:var(--grad)}
.b-steps.v-cards .st{background:#faf7f9;border:1px solid var(--line);border-radius:12px;padding:18px}
.b-steps .st h4{font-size:16px;font-weight:600;margin:0 0 5px;color:inherit}
.b-steps .st p{font-size:13.5px;line-height:1.55;color:var(--ink2);margin:0}
/* ===== footer cta variant ===== */
.b-footer.v-cta{flex-direction:column;align-items:flex-start;gap:14px;padding:44px ${PAD}px}
.b-footer.v-cta .lg{margin-bottom:4px}
.b-footer.v-cta h3{font-size:24px;font-weight:600;margin:0;letter-spacing:-.01em}
.b-footer.v-cta p{font-size:14px;line-height:1.6;opacity:.86;margin:0;max-width:64ch}
.b-footer.v-cta .fcta{display:inline-block;background:var(--grad);color:#fff;font-size:14px;font-weight:500;padding:12px 26px;border-radius:10px;text-decoration:none;margin-top:6px}
/* ===== list / image / button / cols variants ===== */
.b-list.v-checks li::before{content:"✓";background:none;width:auto;height:auto;color:var(--em);font-weight:700;top:0;left:2px}
.b-list.v-numbered{counter-reset:li}.b-list.v-numbered li{counter-increment:li}
.b-list.v-numbered li::before{content:counter(li);background:var(--maroon);color:#fff;width:20px;height:20px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:600;top:0;left:0}
.b-img.v-rounded .imgwrap{border-radius:18px}
.b-img.v-framed .imgwrap{border:1px solid var(--line);padding:8px;background:#fff}
.b-btn.v-bar{background:var(--blush)}.b-btn.v-bar .btns{justify-content:center}
.b-cols.v-stacked .cwrap{grid-template-columns:1fr}
/* ===== 4th-variant styles ===== */
/* header variants */
.b-header.v-centered{flex-direction:column;justify-content:center;gap:8px;text-align:center}
.b-header.v-stacked{flex-direction:column;align-items:flex-start;gap:6px}
.b-header.v-stacked .tag{font-size:12px;opacity:.7}
.b-header.v-banner{color:#fff}.b-header.v-banner .rt{opacity:.92}
/* cover centered */
.b-cover.v-centered{text-align:center;align-items:center}
.b-cover.v-centered .cvin{max-width:76%;margin:0 auto}
.b-cover.v-centered .rule{margin-left:auto;margin-right:auto}
/* heading accent */
.b-head.v-accent h2{padding-left:16px;border-left:4px solid var(--mag)}
/* text two-column + drop cap */
.b-text.v-twocol{column-count:2;column-gap:30px}
.b-text.v-twocol p{margin-top:0;break-inside:avoid}
.b-text.v-dropcap p:first-of-type::first-letter{float:left;font-size:52px;line-height:.82;font-weight:600;color:var(--mag);padding:2px 10px 0 0}
/* image elevated */
.b-img.v-shadow .imgwrap{border-radius:14px;box-shadow:0 22px 50px rgba(57,0,33,.18)}
/* button pill + block */
.b-btn.v-pill .cbtn{border-radius:100px}
.b-btn.v-block .btns{flex-direction:column;align-items:stretch}
.b-btn.v-block .cbtn{display:block;width:100%;text-align:center}
/* cols card */
.b-cols.v-card .ccard{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}
.b-cols.v-card .c-img{border-radius:0;aspect-ratio:16/9}
.b-cols.v-card .cbody{padding:20px 22px}
/* quote centered */
.b-quote.v-centered{text-align:center}
.b-quote.v-centered blockquote{border:0;padding:0;font-size:22px;max-width:52ch;margin:0 auto}
.b-quote.v-centered .qm{margin:0 auto;text-align:center}
.b-quote.v-centered .spk{justify-content:center;padding-left:0}
/* list cards */
.b-list.v-cards ul{display:grid;gap:10px}
.b-list.v-cards li{padding:14px 16px 14px 40px;border:1px solid var(--line);border-radius:10px;margin:0;background:#fff}
.b-list.v-cards li::before{left:18px;top:19px}
/* stats outline */
.b-stats.v-outline .sgrid{gap:14px}
.b-stats.v-outline .sgrid>div{border:1px solid var(--line);border-radius:12px;padding:18px}
/* callout gradient */
.b-callout.v-gradient .co{background:var(--grad);color:#fff;padding:24px;border-radius:12px}
.b-callout.v-gradient .lbl{color:rgba(255,255,255,.85)}
/* compare stacked + divided */
.b-compare.v-stacked .cg{grid-template-columns:1fr}
.b-compare.v-lines .cg{gap:0}
.b-compare.v-lines .col{background:none;border:0;border-radius:0;padding:16px 22px}
.b-compare.v-lines .col.neg{border-right:1px solid var(--line)}
/* table bordered + minimal */
.b-table.v-bordered table,.b-table.v-bordered th,.b-table.v-bordered td{border:1px solid var(--line)}
.b-table.v-bordered th{border-bottom:2px solid var(--maroon)}
.b-table.v-minimal th{border-bottom:1px solid var(--line);color:var(--ink2)}
.b-table.v-minimal td{border-bottom:1px solid #f0ece8}
.b-table.v-minimal td:first-child{font-weight:400;color:var(--ink2)}
/* steps connected */
.b-steps.v-line .st{position:relative}
.b-steps.v-line .n{border-radius:50%;background:var(--grad);position:relative;z-index:1}
.b-steps.v-line .st:not(:last-child)::before{content:"";position:absolute;left:21px;top:46px;bottom:-20px;width:2px;background:var(--line)}
/* divider variants */
.b-div hr.dash{border-top-style:dashed}
.b-div .ddots{display:flex;gap:8px;justify-content:center}
.b-div .ddots span{width:5px;height:5px;border-radius:50%;background:var(--mag)}
.b-div .dgrad{height:3px;border-radius:2px;background:var(--grad)}
/* footer centered + social */
.b-footer.v-centered{flex-direction:column;align-items:center;text-align:center;gap:12px;padding:34px ${PAD}px}
.b-footer.v-social{flex-direction:column;align-items:flex-start;gap:14px;padding:32px ${PAD}px}
.b-footer .soc{display:flex;gap:9px;flex-wrap:wrap}
.b-footer .schip{font-size:12px;background:rgba(255,255,255,.14);padding:6px 13px;border-radius:100px}
/* ===== paged pages with margins (breathing space) ===== */
.sheet.paged{background:transparent;box-shadow:none}
.page{width:var(--sheet-w);min-height:var(--sheet-h);background:#fff;box-shadow:0 14px 44px rgba(0,0,0,.14);margin:0 auto 34px;padding:76px 0;position:relative}
.page.cover-page{padding:0;overflow:hidden}
.page:last-child{margin-bottom:0}
.sf-copybox{position:fixed;inset:0;z-index:99999;background:rgba(20,10,20,.55);display:flex;align-items:center;justify-content:center;padding:24px}
.sf-copybox .cb-card{background:#fff;border-radius:14px;width:min(760px,94vw);max-height:82vh;display:flex;flex-direction:column;box-shadow:0 30px 80px rgba(0,0,0,.4);padding:20px}
.sf-copybox .cb-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.sf-copybox .cb-hd b{font-size:15px}
.sf-copybox .cb-x{background:none;border:0;font-size:15px;cursor:pointer;color:#8b8b8b;padding:4px 8px;border-radius:8px}
.sf-copybox .cb-x:hover{background:#f2f2f4}
.sf-copybox .cb-p{font-size:12.5px;color:#575757;margin:0 0 12px}
.sf-copybox textarea{flex:1;min-height:280px;width:100%;box-sizing:border-box;font:12px/1.5 ui-monospace,Menlo,Consolas,monospace;border:1px solid #e4e4e7;border-radius:10px;padding:12px;background:#fafafa;color:#18181b;resize:none;white-space:pre}
.sf-copybox .cb-ft{margin-top:12px;display:flex;justify-content:flex-end}
.sf-copybox .cb-sel{background:#18181b;color:#fff;border:0;border-radius:9px;padding:9px 16px;font-size:13px;font-weight:500;cursor:pointer}


`;

/* ---------------- block registry (unified, 4 variants per block) ---------------- */
var REG={};
function def(t,o){REG[t]=o;}
function V(b,d){return b.variant||d;}
var IMGPH='<div class="phimg" style="aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;color:#b98fae;font-size:13px;font-weight:500;background:linear-gradient(135deg,#fdeef6,#f7d9ec)">Drop or upload an image</div>';
function gateMotif(){var W=800,H=600,cx=400,cy=300,n=9,l='';for(var i=0;i<=n;i++){var x=Math.round(W/n*i);l+='<line x1="'+x+'" y1="0" x2="'+cx+'" y2="'+cy+'"/><line x1="'+x+'" y1="'+H+'" x2="'+cx+'" y2="'+cy+'"/>';}for(var k=1;k<=4;k++){var f=k/5,w=Math.round(W*f/2),h=Math.round(H*f/2);l+='<rect x="'+(cx-w)+'" y="'+(cy-h)+'" width="'+(w*2)+'" height="'+(h*2)+'"/>';}return '<svg class="gate" viewBox="0 0 800 600" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="1.1" xmlns="http://www.w3.org/2000/svg">'+l+'</svg>';}

def('header',{label:'Header',icon:'layout',tag:'HEADER',dz:false,variants:[['split','Logo + text'],['centered','Centered'],['stacked','Stacked'],['banner','Banner']],
 make:function(){return {type:'header',variant:'split',logoVar:'auto',logoImg:'',showRight:true,right:(CFG.key==='whitepaper'?'The Hidden Gap · Spendflo':'Product news & updates'),bg:'#ffffff',fg:'',align:'left',pt:0,pb:0};},
 render:function(b){var v=V(b,'split');var st=(b.bg?'background:'+b.bg+';':'')+(b.fg?'color:'+b.fg+';':'');if(v==='banner')st='background:var(--grad);color:#fff;';var lg='<span class="lg">'+logoMarkup(v==='banner'?{logoVar:'white',logoImg:b.logoImg}:b)+'</span>';var rt=b.showRight?ce('right',b.right):'';if(v==='centered')return '<div class="b-header v-centered" style="'+st+'">'+lg+(b.showRight?'<span class="rt">'+rt+'</span>':'')+'</div>';if(v==='stacked')return '<div class="b-header v-stacked" style="'+st+'">'+lg+(b.showRight?'<span class="tag">'+rt+'</span>':'')+'</div>';return '<div class="b-header v-'+v+'" style="'+st+'">'+lg+(b.showRight?'<span class="rt">'+rt+'</span>':'<span></span>')+'</div>';}});

def('cover',{label:'Cover',icon:'flag',tag:'COVER',dz:false,variants:[['gate','Gate motif'],['minimal','Minimal'],['split','Split'],['centered','Centered']],
 make:function(){return {type:'cover',variant:'gate',wpk:'WHITEPAPER',title:'The name of your whitepaper goes here',showSub:true,sub:'A single supporting line that frames the argument.',fg:'#ffffff'};},
 render:function(b){var v=V(b,'gate');var motif=(v!=='minimal')?gateMotif():'';return '<div class="b-cover v-'+v+' '+(PAGED?'full':'')+'" style="padding:64px '+PAD+'px">'+'<span class="glow"></span>'+motif+'<div class="cvin"><p class="wpk">'+ce('wpk',b.wpk)+'</p><div class="rule"></div><h1>'+ce('title',b.title)+'</h1><div class="rule"></div>'+(b.showSub?'<p class="sub">'+ce('sub',b.sub)+'</p>':'')+'</div></div>';}});

def('heading',{label:'Heading',icon:'type',tag:'HEADING',dz:false,variants:[['eyebrow','Eyebrow'],['numbered','Numbered'],['underline','Underline'],['accent','Accent bar']],
 make:function(){return {type:'heading',variant:'eyebrow',num:'01',showEyebrow:true,eyebrow:'Section',head:'A section headline',bg:'#ffffff',fg:'',align:'left',pt:34,pb:8,fs:0};},
 render:function(b){var v=V(b,'eyebrow');var eb=(v==='eyebrow'&&b.showEyebrow)?'<p class="b-eyebrow">'+ce('eyebrow',b.eyebrow)+'</p>':'';var h='<h2'+(b.fs?' style="font-size:'+b.fs+'px"':'')+'>'+ce('head',b.head)+'</h2>';if(v==='numbered')return '<div class="op b-head v-numbered '+alignCls(b)+'" style="'+opStyle(b)+'"><span class="snum">'+ce('num',b.num)+'</span><div class="htext">'+h+'</div></div>';return '<div class="op b-head v-'+v+' '+alignCls(b)+'" style="'+opStyle(b)+'">'+eb+h+'</div>';}});

def('text',{label:'Text',icon:'text',tag:'TEXT',dz:false,variants:[['default','Body'],['lead','Lead'],['twocol','Two columns'],['dropcap','Drop cap']],
 make:function(){return {type:'text',variant:'default',paras:['Write your copy here. Keep it clear and specific — the editor shows exactly how it will export.'],bg:'#ffffff',fg:'',align:'left',pt:8,pb:16,fs:0};},
 render:function(b){var v=V(b,'default');var fs=b.fs||(v==='lead'?18:15);return '<div class="op b-text v-'+v+' '+alignCls(b)+'" style="'+opStyle(b)+'">'+b.paras.map(function(p,i){return '<p style="font-size:'+fs+'px'+(v==='lead'?';line-height:1.55;color:var(--ink)':'')+'">'+ce('paras.'+i,p)+'</p>';}).join('')+'</div>';}});

def('image',{label:'Image',icon:'image',tag:'IMAGE',dz:true,variants:[['full','Full'],['rounded','Rounded'],['framed','Framed'],['shadow','Elevated']],
 make:function(){return {type:'image',variant:'rounded',src:'',cap:'Image caption',showCap:false,bg:'#ffffff',fg:'',pt:12,pb:12};},
 render:function(b){return '<div class="op b-img v-'+V(b,'rounded')+'" style="'+opStyle(b)+'"><div class="imgwrap">'+(b.src?'<img src="'+b.src+'"/>':IMGPH)+'</div>'+(b.showCap?'<div class="cap">'+ce('cap',b.cap)+'</div>':'')+'</div><div class="dz">Drop image to replace</div>';}});

def('button',{label:'Button',icon:'cta',tag:'BUTTON',dz:false,variants:[['inline','Inline'],['bar','Bar'],['pill','Pill'],['block','Full width']],
 make:function(){return {type:'button',variant:'inline',btn1:'Book a demo',url1:'https://spendflo.com',showBtn2:false,btn2:'Learn more',url2:'#',bg:'#ffffff',fg:'',align:'left',pt:12,pb:16};},
 render:function(b){return '<div class="op b-btn v-'+V(b,'inline')+' '+alignCls(b)+'" style="'+opStyle(b)+'"><div class="btns"><a class="cbtn pri" href="'+esc(b.url1||'#')+'">'+ce('btn1',b.btn1)+'</a>'+(b.showBtn2?'<a class="cbtn sec" href="'+esc(b.url2||'#')+'">'+ce('btn2',b.btn2)+'</a>':'')+'</div></div>';}});

def('cols',{label:'Image + Text',icon:'cols',tag:'COLUMNS',dz:true,variants:[['imgleft','Image left'],['imgright','Image right'],['stacked','Stacked'],['card','Card']],
 make:function(){return {type:'cols',variant:'imgleft',img:'',h:'A supporting point',p:'A short paragraph that pairs with the image beside it.',bg:'#ffffff',fg:'',pt:16,pb:16};},
 render:function(b){var v=V(b,'imgleft');var img=b.img?'<div class="c-img"><img src="'+b.img+'"/></div>':'<div class="c-img" style="aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;color:#b98fae;font-size:12px;font-weight:500;background:linear-gradient(135deg,#fdeef6,#f7d9ec)">Image</div>';var txt='<div class="cbody"><h3>'+ce('h',b.h)+'</h3><p>'+ce('p',b.p)+'</p></div>';var inner;if(v==='card')inner='<div class="ccard">'+img+txt+'</div>';else inner='<div class="cwrap">'+((v==='imgright')?txt+img:img+txt)+'</div>';return '<div class="op b-cols v-'+v+'" style="'+opStyle(b)+'">'+inner+'<div class="dz">Drop image to replace</div></div>';}});

def('quote',{label:'Quote',icon:'quote',tag:'QUOTE',dz:false,variants:[['plain','No speaker'],['speaker','With speaker'],['card','Card + mark'],['centered','Centered']],
 make:function(){return {type:'quote',variant:'speaker',quote:'A short, punchy pull quote that stands out on the page.',name:'David Morgan',role:'CFO, Loop Returns',bg:'#ffffff',fg:'',align:'left',pt:22,pb:22};},
 render:function(b){var v=V(b,'speaker');var qm=(v==='card'||v==='centered')?'<span class="qm">“</span>':'';var spk=(v==='speaker'||v==='card'||v==='centered')?'<div class="spk"><span class="av">'+esc((b.name||'?').trim().charAt(0))+'</span><div><div class="nm">'+ce('name',b.name)+'</div><div class="rl">'+ce('role',b.role)+'</div></div></div>':'';return '<div class="op b-quote v-'+v+' '+alignCls(b)+'" style="'+opStyle(b)+'">'+qm+'<blockquote>'+ce('quote',b.quote)+'</blockquote>'+spk+'</div>';}});

def('list',{label:'List',icon:'list',tag:'LIST',dz:false,variants:[['dots','Dots'],['checks','Checks'],['numbered','Numbered'],['cards','Cards']],
 make:function(){return {type:'list',variant:'dots',items:['First point worth making','Second supporting point','Third takeaway'],bg:'#ffffff',fg:'',align:'left',pt:8,pb:16};},
 render:function(b){return '<div class="op b-list v-'+V(b,'dots')+' '+alignCls(b)+'" style="'+opStyle(b)+'"><ul>'+b.items.map(function(it,i){return '<li>'+ce('items.'+i,it)+'</li>';}).join('')+'</ul></div>';}});

def('stats',{label:'Stats',icon:'hash',tag:'STATS',dz:false,variants:[['plain','Plain'],['bold','Bold + rules'],['cards','Cards'],['outline','Outline']],
 make:function(){return {type:'stats',variant:'bold',stats:[{v:'85%',c:'of finance leaders struggle with spend visibility'},{v:'5–16%',c:'of negotiated savings lost to maverick buying'},{v:'40%',c:'of SaaS spend goes completely unmonitored'}],showSrc:true,src:'Sources: Payhawk; Hackett Group; Spendflo',bg:'#ffffff',fg:'',align:'left',pt:22,pb:22};},
 render:function(b){return '<div class="op b-stats v-'+V(b,'plain')+' '+alignCls(b)+'" style="'+opStyle(b)+'"><div class="sgrid">'+b.stats.map(function(s,i){return '<div><div class="v">'+ce('stats.'+i+'.v',s.v)+'</div><div class="c">'+ce('stats.'+i+'.c',s.c)+'</div></div>';}).join('')+'</div>'+(b.showSrc?'<div class="src">'+ce('src',b.src)+'</div>':'')+'</div>';}});

def('callout',{label:'Callout',icon:'quote',tag:'CALLOUT',dz:false,variants:[['line','Accent line'],['box','Blush box'],['dark','Dark box'],['gradient','Gradient']],
 make:function(){return {type:'callout',variant:'box',lbl:'THE GAP IN ONE LINE',stmt:'Your ERP tells you what was purchased, from whom, and at what price.',showStmt2:true,stmt2:'It does not tell you why that vendor was chosen, or whether a preferred contract existed.',bg:'',fg:'',align:'left',pt:16,pb:16};},
 render:function(b){var v=V(b,'box');return '<div class="op b-callout v-'+v+'" style="padding:'+b.pt+'px '+PAD+'px '+b.pb+'px"><div class="co">'+(b.lbl?'<p class="lbl">'+ce('lbl',b.lbl)+'</p>':'')+'<p class="stmt">'+ce('stmt',b.stmt)+'</p>'+(b.showStmt2?'<p class="stmt s2">'+ce('stmt2',b.stmt2)+'</p>':'')+'</div></div>';}});

def('compare',{label:'Without / With',icon:'cols',tag:'COMPARE',dz:false,variants:[['cards','Cards'],['plain','Plain'],['stacked','Stacked'],['lines','Divided']],
 make:function(){return {type:'compare',variant:'cards',neg:{title:'Without intake',items:['Renewal notice arrives with a 2-week deadline','Director approves at last year\u2019s pricing','No check for duplicate tools org-wide','Finance discovers the cost at month-end close']},pos:{title:'With intake',items:['System generates a renewal alert 90 days out','Request routed for a market-rate check','Duplicate tools surfaced automatically','Proceeds at validated terms with full audit trail']},bg:'#ffffff',fg:'',align:'left',pt:16,pb:16};},
 render:function(b){var neg='<div class="col neg"><p class="ch">'+ce('neg.title',b.neg.title)+'</p><ul>'+b.neg.items.map(function(t,i){return '<li>'+ce('neg.items.'+i,t)+'</li>';}).join('')+'</ul></div>';var pos='<div class="col pos"><p class="ch">'+ce('pos.title',b.pos.title)+'</p><ul>'+b.pos.items.map(function(t,i){return '<li>'+ce('pos.items.'+i,t)+'</li>';}).join('')+'</ul></div>';return '<div class="op b-compare v-'+V(b,'cards')+'" style="'+opStyle(b)+'"><div class="cg">'+neg+pos+'</div></div>';}});

def('table',{label:'Table',icon:'grid',tag:'TABLE',dz:false,variants:[['lines','Lines'],['striped','Striped'],['bordered','Bordered'],['minimal','Minimal']],
 make:function(){return {type:'table',variant:'lines',cols:['What your ERP captures','What your ERP misses'],rows:[['Purchase orders & invoices','Why that vendor was selected'],['General ledger entries','What alternatives were evaluated'],['Three-way matching','Whether preferred contracts existed'],['Financial reporting','When the commitment was actually made']],bg:'#ffffff',fg:'',align:'left',pt:14,pb:14};},
 render:function(b){return '<div class="op b-table v-'+V(b,'lines')+'" style="'+opStyle(b)+'"><table><thead><tr>'+b.cols.map(function(c,i){return '<th>'+ce('cols.'+i,c)+'</th>';}).join('')+'</tr></thead><tbody>'+b.rows.map(function(r,ri){return '<tr>'+r.map(function(c,ci){return '<td>'+ce('rows.'+ri+'.'+ci,c)+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';}});

def('steps',{label:'Roadmap',icon:'hash',tag:'STEPS',dz:false,variants:[['square','Squares'],['round','Rounded'],['cards','Cards'],['line','Connected']],
 make:function(){return {type:'steps',variant:'square',steps:[{t:'Quantify the blind spot',d:'For your top purchases last quarter, identify when finance first became aware of the spend.'},{t:'Design the intake experience',d:'Make the intake process simpler than the workaround — a modern, consumer-like request flow.'},{t:'Connect to financial systems',d:'Feed intake data into your ERP, budgets and forecasts for forward-looking visibility.'},{t:'Track upstream metrics',d:'Measure pre-commitment activity with purpose-built KPIs, not post-transaction analysis.'}],bg:'#ffffff',fg:'',align:'left',pt:16,pb:16};},
 render:function(b){return '<div class="op b-steps v-'+V(b,'square')+'" style="'+opStyle(b)+'">'+b.steps.map(function(s,i){return '<div class="st"><span class="n">'+('0'+(i+1)).slice(-2)+'</span><div><h4>'+ce('steps.'+i+'.t',s.t)+'</h4><p>'+ce('steps.'+i+'.d',s.d)+'</p></div></div>';}).join('')+'</div>';}});

def('divider',{label:'Divider',icon:'hr',tag:'RULE',dz:false,variants:[['line','Hairline'],['dashed','Dashed'],['dots','Dots'],['gradient','Gradient']],
 make:function(){return {type:'divider',variant:'line',bg:'#ffffff',fg:'',align:'left',pt:10,pb:10};},
 render:function(b){var v=V(b,'line');var inner=(v==='dots')?'<div class="ddots"><span></span><span></span><span></span></div>':(v==='gradient')?'<div class="dgrad"></div>':'<hr'+(v==='dashed'?' class="dash"':'')+'/>';return '<div class="b-div v-'+v+'" style="'+(b.bg?'background:'+b.bg+';':'')+'padding:'+b.pt+'px '+PAD+'px '+b.pb+'px">'+inner+'</div>';}});

def('spacer',{label:'Spacer',icon:'space',tag:'SPACE',dz:false,
 make:function(){return {type:'spacer',h:32,bg:'#ffffff'};},
 render:function(b){return '<div class="b-space" style="height:'+b.h+'px;'+(b.bg?'background:'+b.bg:'')+'"></div>';}});

def('footer',{label:'Footer',icon:'footer',tag:'FOOTER',dz:false,variants:[['bar','Bar'],['cta','CTA block'],['centered','Centered'],['social','Social']],
 make:function(){return {type:'footer',variant:'bar',showLogo:true,logoVar:'white',logoImg:'',links:['Website','LinkedIn','Contact'],dis:'© 2026 Spendflo. All rights reserved.',h:'Want to close the gap between intent and transaction?',p:'Spendflo captures every purchase request at the moment of intent, automates approvals, and connects approved spend directly to your ERP.',cta:'Book a demo',url:'https://spendflo.com',bg:'#390021',fg:'#ffffff',align:'left',pt:0,pb:0};},
 render:function(b){var v=V(b,'bar');var st='background:'+(b.bg||'#390021')+';color:'+(b.fg||'#fff')+'';var lg=b.showLogo?'<span class="lg">'+logoMarkup(b)+'</span>':'';var links='<span class="links">'+(b.links||[]).map(function(l,i){return ce('links.'+i,l);}).join('')+'</span>';var dis=b.dis?'<span class="dis">'+ce('dis',b.dis)+'</span>':'';
   if(v==='cta')return '<div class="b-footer v-cta" style="'+st+'">'+lg+'<h3>'+ce('h',b.h)+'</h3><p>'+ce('p',b.p)+'</p><a class="fcta" href="'+esc(b.url||'#')+'">'+ce('cta',b.cta)+'</a></div>';
   if(v==='centered')return '<div class="b-footer v-centered" style="'+st+'">'+(b.showLogo?lg:'')+links+dis+'</div>';
   if(v==='social')return '<div class="b-footer v-social" style="'+st+'">'+(b.showLogo?lg:'')+'<span class="soc">'+(b.links||[]).map(function(l,i){return '<span class="schip">'+ce('links.'+i,l)+'</span>';}).join('')+'</span>'+dis+'</div>';
   return '<div class="b-footer v-bar" style="'+st+'">'+(b.showLogo?lg:'<span></span>')+links+dis+'</div>';}});

var ORDER = CFG.order || ['header','cover','heading','text','image','button','cols','quote','callout','compare','table','stats','steps','list','divider','spacer','footer'];

/* ---------------- state + history + autosave ---------------- */
var LS_DOC='sf-'+(CFG.key||'b')+'-doc', LS_TPL='sf-'+(CFG.key||'b')+'-tpl';
var doc=[], sel=null, zoom=1, itab='block', imgTarget=null, logoTarget=null;
var hist=[], hi=-1, saveT=null, histT=null;
function load(){try{var s=JSON.parse(localStorage.getItem(LS_DOC));if(s&&s.length)return s;}catch(e){}return (CFG.defaultDoc?CFG.defaultDoc(REG,uid):defDoc());}
function defDoc(){return ['header','heading','text','footer'].map(function(t){var b=REG[t].make();b.id=uid();b.hidden=false;return b;});}
function save(){clearTimeout(saveT);var i=$('#saveI');if(i)i.style.opacity='.4';saveT=setTimeout(function(){try{localStorage.setItem(LS_DOC,JSON.stringify(doc));}catch(e){}if(i){i.style.opacity='1';}},400);}
function record(){clearTimeout(histT);histT=setTimeout(function(){hist=hist.slice(0,hi+1);hist.push(clone(doc));if(hist.length>60)hist.shift();hi=hist.length-1;updUR();},250);}
function recordNow(){hist=hist.slice(0,hi+1);hist.push(clone(doc));if(hist.length>60)hist.shift();hi=hist.length-1;updUR();}
function undo(){if(hi>0){hi--;doc=clone(hist[hi]);sel=null;render();inspector();updUR();save();}}
function redo(){if(hi<hist.length-1){hi++;doc=clone(hist[hi]);sel=null;render();inspector();updUR();save();}}
function updUR(){var u=$('#bUndo'),r=$('#bRedo');if(u)u.disabled=hi<=0;if(r)r.disabled=hi>=hist.length-1;}
function blockById(id){return doc.filter(function(b){return b.id===id;})[0];}

/* ---------------- render ---------------- */
function blockHTML(b){var r=REG[b.type];if(!r)return '';
  return '<div class="blk '+(b.id===sel?'sel':'')+'" data-id="'+b.id+'" data-hidden="'+(b.hidden?1:0)+'">'
    +'<span class="badge">'+r.tag+'</span>'
    +'<div class="btools"><button data-act="up" title="Move up">'+SVG('up')+'</button><button data-act="dn" title="Move down">'+SVG('dn')+'</button><button data-act="dup" title="Duplicate">'+SVG('dup')+'</button><button data-act="hide" title="'+(b.hidden?'Show':'Hide')+'">'+SVG(b.hidden?'eyeoff':'eye')+'</button><button data-act="del" class="danger" title="Delete">'+SVG('trash')+'</button></div>'
    +r.render(b)+'</div>';
}
function paginate(){
  var vis=doc.filter(function(b){return !b.hidden;});
  var m=document.createElement('div');m.style.cssText='position:absolute;left:-99999px;top:0;width:'+PAGE_W+'px;visibility:hidden';
  m.innerHTML=vis.map(function(b){return '<div>'+REG[b.type].render(b)+'</div>';}).join('');
  document.body.appendChild(m);
  var hs=[].slice.call(m.children).map(function(el){return el.offsetHeight;});
  document.body.removeChild(m);
  var CH=PAGE_H-152, pages=[], cur=[], used=0;
  vis.forEach(function(b,i){
    if(b.type==='cover'){ if(cur.length){pages.push(cur);cur=[];used=0;} pages.push([b]); return; }
    var h=hs[i]||0; if(b.type==='image'&&b.src&&h<60)h=Math.round(PAGE_W*0.6);
    if(used>0 && used+h>CH){ pages.push(cur); cur=[]; used=0; }
    cur.push(b); used+=h;
  });
  if(cur.length)pages.push(cur);
  if(!pages.length)pages.push([]);
  return pages;
}
function render(){
  var sheet=$('#sheet');
  if(PAGED){
    sheet.innerHTML=paginate().map(function(pg){var cover=pg.length===1&&pg[0]&&pg[0].type==='cover';return '<div class="page'+(cover?' cover-page':'')+'">'+pg.map(blockHTML).join('')+'</div>';}).join('');
  } else {
    sheet.innerHTML=doc.map(blockHTML).join('');
  }
  renderTree();save();if(typeof setZoom==='function')setZoom(zoom);
}

/* canvas interactions */
document.addEventListener('input',function(e){var ed=e.target.closest&&e.target.closest('#sheet [contenteditable]');if(!ed)return;
  var blk=ed.closest('.blk');var b=blockById(blk.dataset.id);if(!b)return;setPath(b,ed.dataset.f,ed.textContent);save();record();});
function bindSheet(){
  var sheet=$('#sheet');
  sheet.addEventListener('click',function(e){
    var a=e.target.closest('a');if(a){e.preventDefault();}
    var blk=e.target.closest('.blk');if(!blk)return;var b=blockById(blk.dataset.id);
    var tb=e.target.closest('.btools button');if(tb){e.preventDefault();act(tb.dataset.act,b);return;}
    sel=b.id;itab='block';syncSel();inspector();
  });
  /* image drag & drop */
  sheet.addEventListener('dragover',function(e){var blk=e.target.closest('.blk');if(!blk)return;var b=blockById(blk.dataset.id);if(!b||!REG[b.type].dz)return;e.preventDefault();blk.classList.add('dragover');});
  sheet.addEventListener('dragleave',function(e){var blk=e.target.closest('.blk');if(blk)blk.classList.remove('dragover');});
  sheet.addEventListener('drop',function(e){var blk=e.target.closest('.blk');if(!blk)return;var b=blockById(blk.dataset.id);if(!b||!REG[b.type].dz)return;e.preventDefault();blk.classList.remove('dragover');
    var f=e.dataTransfer.files&&e.dataTransfer.files[0];if(!f||!/^image\//.test(f.type))return;
    readImg(f,function(url){setPath(b,b.type==='cols'?'img':'src',url);sel=b.id;render();inspector();recordNow();toast('Image added');},{mode:'photo'});});
}
function syncSel(){$$('.blk').forEach(function(el){el.classList.toggle('sel',el.dataset.id===sel);});renderTree();}
function act(a,b){var i=doc.indexOf(b);
  if(a==='up'&&i>0)doc.splice(i-1,0,doc.splice(i,1)[0]);
  else if(a==='dn'&&i<doc.length-1)doc.splice(i+1,0,doc.splice(i,1)[0]);
  else if(a==='dup'){var c=clone(b);c.id=uid();doc.splice(i+1,0,c);sel=c.id;}
  else if(a==='hide')b.hidden=!b.hidden;
  else if(a==='del'){if(!confirm('Delete this block?'))return;doc.splice(i,1);if(sel===b.id)sel=null;}
  render();inspector();recordNow();
}
function readImg(f,cb,opts){opts=opts||{};var mode=opts.mode||'photo';
  if(f.type==='image/svg+xml'){var r0=new FileReader();r0.onload=function(){cb(r0.result);};r0.readAsDataURL(f);return;}
  var maxW=opts.maxW||(mode==='logo'?600:(PAGED?1500:900));var q=opts.q||(PAGED?0.85:0.78);var budget=opts.budget||(PAGED?260000:135000);
  var rd=new FileReader();
  rd.onload=function(){var img=new Image();
    img.onload=function(){try{
      var w=img.naturalWidth||img.width||maxW,h=img.naturalHeight||img.height||maxW;
      var scale=Math.min(1,maxW/w);var cw=Math.max(1,Math.round(w*scale)),ch=Math.max(1,Math.round(h*scale));
      function draw(dw,dh){var c=document.createElement('canvas');c.width=dw;c.height=dh;var cx=c.getContext('2d');if(mode!=='logo'){cx.fillStyle='#ffffff';cx.fillRect(0,0,dw,dh);}cx.drawImage(img,0,0,dw,dh);return c;}
      var c=draw(cw,ch);
      if(mode==='logo'){cb(c.toDataURL('image/png'));return;}
      var qq=q,out=c.toDataURL('image/jpeg',qq),guard=0;
      while(out.length>budget&&guard<8){guard++;if(qq>0.46){qq=Math.max(0.46,qq-0.12);}else{cw=Math.max(320,Math.round(cw*0.82));ch=Math.round(ch*cw/(c.width));c=draw(cw,ch);}out=c.toDataURL('image/jpeg',qq);}
      cb(out);
    }catch(e){cb(rd.result);}};
    img.onerror=function(){cb(rd.result);};img.src=rd.result;};
  rd.readAsDataURL(f);}

/* palette */
function renderPalette(){$('#palette').innerHTML=ORDER.map(function(t){var r=REG[t];return '<button class="pblock" data-add="'+t+'"><span class="pi">'+SVG(r.icon)+'</span><span>'+r.label+'</span></button>';}).join('');}
function bindPalette(){$('#palette').addEventListener('click',function(e){var btn=e.target.closest('[data-add]');if(!btn)return;
  var b=REG[btn.dataset.add].make();b.id=uid();b.hidden=false;var i=sel?doc.indexOf(blockById(sel))+1:doc.length;doc.splice(i,0,b);sel=b.id;itab='block';render();inspector();recordNow();
  var el=$('.blk[data-id="'+b.id+'"]');if(el)el.scrollIntoView({behavior:'smooth',block:'center'});toast('Block added');});}

/* tree + drag reorder */
function renderTree(){$('#tcount').textContent=doc.length+' blocks';
  $('#tree').innerHTML=doc.map(function(b){var r=REG[b.type];return '<div class="titem '+(b.id===sel?'sel':'')+' '+(b.hidden?'hidden':'')+'" data-id="'+b.id+'" draggable="true"><span class="dr">'+SVG('drag')+'</span><span class="nm">'+r.label+'</span><span class="tt">'+r.tag+'</span></div>';}).join('');}
var dragId=null;
function bindTree(){var tree=$('#tree');
  tree.addEventListener('click',function(e){var it=e.target.closest('.titem');if(!it)return;sel=it.dataset.id;itab='block';syncSel();inspector();var el=$('.blk[data-id="'+sel+'"]');if(el)el.scrollIntoView({behavior:'smooth',block:'center'});});
  tree.addEventListener('dragstart',function(e){var it=e.target.closest('.titem');if(!it)return;dragId=it.dataset.id;e.dataTransfer.effectAllowed='move';});
  tree.addEventListener('dragover',function(e){e.preventDefault();var it=e.target.closest('.titem');if(!it||it.dataset.id===dragId)return;$$('.titem').forEach(function(x){x.classList.remove('drop-above','drop-below');});var r=it.getBoundingClientRect();it.classList.add(e.clientY<r.top+r.height/2?'drop-above':'drop-below');});
  tree.addEventListener('drop',function(e){e.preventDefault();var it=e.target.closest('.titem');if(!it||!dragId)return;var before=e.clientY<it.getBoundingClientRect().top+it.getBoundingClientRect().height/2;var from=doc.indexOf(blockById(dragId));var moved=doc.splice(from,1)[0];var to=doc.indexOf(blockById(it.dataset.id));if(!before)to++;doc.splice(to,0,moved);dragId=null;render();recordNow();});
  tree.addEventListener('dragend',function(){$$('.titem').forEach(function(x){x.classList.remove('drop-above','drop-below');});dragId=null;});}

/* uploads */
function bindUploads(){
  $('#fileImg').addEventListener('change',function(e){var f=e.target.files[0];if(!f||!imgTarget)return;readImg(f,function(url){var b=blockById(imgTarget.id);if(b){setPath(b,imgTarget.f,url);render();inspector();recordNow();toast('Image added');}imgTarget=null;e.target.value='';},{mode:'photo'});});
  $('#fileLogo').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;readImg(f,function(url){
    if(logoTarget==='ALL'){doc.forEach(function(b){if(b.type==='header'||b.type==='cover'||b.type==='footer')b.logoImg=url;});}
    else {var b=blockById(logoTarget);if(b)b.logoImg=url;}
    render();inspector();recordNow();toast('Logo updated');logoTarget=null;e.target.value='';},{mode:'logo'});});
}

/* ---------------- inspector ---------------- */
var SW=['#390021','#ffffff','#faf7f9','#fdeef6','#e92589','#1a1a1a','#f4f3f1'];
function fText(l,f,v){return '<div class="field"><label>'+l+'</label><input type="text" data-ctl="text" data-f="'+f+'" value="'+esc(v).replace(/"/g,'&quot;')+'"/></div>';}
function fArea(l,f,v){return '<div class="field"><label>'+l+'</label><textarea data-ctl="area" data-f="'+f+'">'+esc(v)+'</textarea></div>';}
function fTog(l,f,on){return '<div class="toggle"><span>'+l+'</span><span class="sw-t '+(on?'on':'')+'" data-ctl="tog" data-f="'+f+'"></span></div>';}
function fSel(l,f,v,opts){return '<div class="field"><label>'+l+'</label><select data-ctl="sel" data-f="'+f+'">'+opts.map(function(o){return '<option value="'+o[0]+'"'+(o[0]===v?' selected':'')+'>'+o[1]+'</option>';}).join('')+'</select></div>';}
function colorRow(l,f,v){return '<div class="field"><label>'+l+'</label><div class="swatches">'+SW.map(function(c){return '<span class="sw '+(((v||'').toLowerCase()===c)?'on':'')+'" style="background:'+c+'" data-ctl="hex" data-f="'+f+'" data-hex="'+c+'"></span>';}).join('')+'<input type="text" class="hexin" data-ctl="hextext" data-f="'+f+'" value="'+esc(v||'')+'" placeholder="#hex"/></div></div>';}
function fRange(l,f,v,mn,mx){return '<div class="field"><label>'+l+' <span class="mono" style="float:right;color:var(--ui-txt3)">'+v+'px</span></label><div class="rng"><input type="range" min="'+mn+'" max="'+mx+'" value="'+v+'" data-ctl="rng" data-f="'+f+'"/></div></div>';}
function repHead(f,i){return '<button class="rx" data-ctl="arrdel" data-arr="'+f+'" data-i="'+i+'">'+SVG('x')+'</button>';}
function addBtn(f,l){return '<button class="mini-add" data-ctl="arradd" data-arr="'+f+'">'+SVG('plus')+' '+l+'</button>';}
function imgCtl(b,f){var cur=getPath(b,f);return (cur?'<img class="thumb" src="'+cur+'"/>':'')+'<div class="upl"><button class="ub" data-ctl="img" data-f="'+f+'">'+(cur?'Replace image':'Upload image')+'</button>'+(cur?'<button class="ub" data-ctl="imgclear" data-f="'+f+'">Clear</button>':'')+'<span style="font-size:11px;color:var(--ui-txt3)">or drag &amp; drop</span></div>';}
function logoCtl(b){var h=fSel('Logo colour','logoVar',b.logoVar||'auto',[['auto','Auto'],['white','White'],['black','Black']]);if(b.logoImg)h+='<img class="thumb" src="'+b.logoImg+'" style="height:44px;object-fit:contain;padding:6px;background:'+(isDark(b.bg)?'#2a0018':'#f1f1f3')+'"/>';h+='<div class="upl"><button class="ub" data-ctl="logo" data-scope="one">'+(b.logoImg?'Replace logo':'Upload logo')+'</button>'+(b.logoImg?'<button class="ub" data-ctl="logoclear">Use Spendflo</button>':'')+'<button class="ub" data-ctl="logo" data-scope="all">Apply to all</button></div>';return h;}

function variantSel(b){var r=REG[b.type];if(!r.variants)return '';var cur=b.variant||r.variants[0][0];return '<div class="field"><label>Design</label><div class="vseg">'+r.variants.map(function(o){return '<button class="'+(cur===o[0]?'on':'')+'" data-ctl="variant" data-v="'+o[0]+'">'+o[1]+'</button>';}).join('')+'</div></div>';}
function content(b){var h=variantSel(b);var v=b.variant;switch(b.type){
 case'header':h+=logoCtl(b);h+=fTog('Show right text','showRight',b.showRight);if(b.showRight)h+=fText('Right text','right',b.right);break;
 case'cover':h+=fText('Whitepaper label','wpk',b.wpk);h+=fText('Title','title',b.title);h+=fTog('Show subtitle','showSub',b.showSub);if(b.showSub)h+=fArea('Subtitle','sub',b.sub);h+='<p style="font-size:11.5px;color:var(--ui-txt3);margin:2px 0 0;line-height:1.5">Fills the full first page. The brand gradient & gate motif are built in.</p>';break;
 case'heading':if(v==='numbered')h+=fText('Number','num',b.num);if(v==='eyebrow'){h+=fTog('Show eyebrow','showEyebrow',b.showEyebrow);if(b.showEyebrow)h+=fText('Eyebrow','eyebrow',b.eyebrow);}h+=fText('Heading','head',b.head);h+=fRange('Heading size','fs',b.fs||26,16,44);break;
 case'text':b.paras.forEach(function(p,i){h+='<div class="repeat">'+repHead('paras',i)+fArea('Paragraph '+(i+1),'paras.'+i,p)+'</div>';});h+=addBtn('paras','Add paragraph');h+=fRange('Text size','fs',b.fs||(v==='lead'?18:15),12,24);break;
 case'image':h+=imgCtl(b,'src');h+=fTog('Show caption','showCap',b.showCap);if(b.showCap)h+=fText('Caption','cap',b.cap);break;
 case'button':h+=fText('Button 1 label','btn1',b.btn1);h+=fText('Button 1 URL','url1',b.url1);h+=fTog('Show 2nd button','showBtn2',b.showBtn2);if(b.showBtn2){h+=fText('Button 2 label','btn2',b.btn2);h+=fText('Button 2 URL','url2',b.url2);}break;
 case'cols':h+=imgCtl(b,'img');h+=fText('Heading','h',b.h);h+=fArea('Text','p',b.p);break;
 case'quote':h+=fArea('Quote','quote',b.quote);if(v==='speaker'||v==='card'||v==='centered'){h+=fText('Name','name',b.name);h+=fText('Role','role',b.role);}break;
 case'list':b.items.forEach(function(it,i){h+='<div class="repeat">'+repHead('items',i)+fText('Item '+(i+1),'items.'+i,it)+'</div>';});h+=addBtn('items','Add item');break;
 case'stats':b.stats.forEach(function(s,i){h+='<div class="repeat">'+repHead('stats',i)+fText('Value','stats.'+i+'.v',s.v)+fText('Caption','stats.'+i+'.c',s.c)+'</div>';});h+=addBtn('stats','Add stat');h+=fTog('Show source','showSrc',b.showSrc);if(b.showSrc)h+=fText('Source','src',b.src);break;
 case'callout':h+=fText('Label','lbl',b.lbl);h+=fArea('Statement','stmt',b.stmt);h+=fTog('Show 2nd line','showStmt2',b.showStmt2);if(b.showStmt2)h+=fArea('Second line','stmt2',b.stmt2);break;
 case'compare':h+=fText('Left title','neg.title',b.neg.title);b.neg.items.forEach(function(t,i){h+='<div class="repeat">'+repHead('neg.items',i)+fText('Left '+(i+1),'neg.items.'+i,t)+'</div>';});h+=addBtn('neg.items','Add left item');h+=fText('Right title','pos.title',b.pos.title);b.pos.items.forEach(function(t,i){h+='<div class="repeat">'+repHead('pos.items',i)+fText('Right '+(i+1),'pos.items.'+i,t)+'</div>';});h+=addBtn('pos.items','Add right item');break;
 case'table':h+='<p style="font-size:12px;color:var(--ui-txt2);margin:0 0 10px">Edit headers & cells directly on the canvas.</p><div class="field"><label>Columns: '+b.cols.length+' · Rows: '+b.rows.length+'</label><div class="tblops"><button class="ub" data-ctl="rowadd">+ Row</button><button class="ub" data-ctl="rowdel">− Row</button><button class="ub" data-ctl="coladd">+ Col</button><button class="ub" data-ctl="coldel">− Col</button></div></div>';break;
 case'steps':b.steps.forEach(function(s,i){h+='<div class="repeat">'+repHead('steps',i)+fText('Step '+(i+1)+' title','steps.'+i+'.t',s.t)+fArea('Description','steps.'+i+'.d',s.d)+'</div>';});h+=addBtn('steps','Add step');break;
 case'footer':if(v==='cta'){h+=fTog('Show logo','showLogo',b.showLogo);if(b.showLogo)h+=logoCtl(b);h+=fText('Heading','h',b.h);h+=fArea('Text','p',b.p);h+=fText('Button label','cta',b.cta);h+=fText('Button URL','url',b.url);}else{h+=fTog('Show logo','showLogo',b.showLogo);if(b.showLogo)h+=logoCtl(b);b.links.forEach(function(l,i){h+='<div class="repeat">'+repHead('links',i)+fText('Link '+(i+1),'links.'+i,l)+'</div>';});h+=addBtn('links','Add link');h+=fArea('Disclaimer','dis',b.dis);}break;
 case'spacer':h+=fRange('Height','h',b.h,8,200);break;
 case'divider':h+='<p style="font-size:12px;color:var(--ui-txt3);margin:0">A hairline rule. Adjust colour & spacing below.</p>';break;
}return h;}

function inspector(){var insp=$('#insp');
 var tabs='<div class="itabs"><button class="'+(itab==='block'?'on':'')+'" data-it="block">Block</button><button class="'+(itab==='doc'?'on':'')+'" data-it="doc">Document</button></div>';
 if(itab==='doc'){insp.innerHTML=tabs+'<div class="isec"><div class="ih">Document</div><p style="font-size:12.5px;color:var(--ui-txt2);line-height:1.5;margin:0 0 12px">'+(PAGED?'A4 pages · '+PAGE_W+'×'+PAGE_H+'px. Content flows and paginates on export.':'Email width · '+PAGE_W+'px. Exports as one continuous page (PNG/HTML) sized to your content.')+'</p>'+fSel('Zoom','.zoom',String(Math.round(zoom*100)),[['50','50%'],['75','75%'],['100','100%'],['125','125%'],['150','150%']])+'</div>'
   +'<div class="isec"><div class="ih">Brand logo</div><div class="upl"><button class="ub" data-ctl="logo" data-scope="all">Upload logo (all)</button><button class="ub" data-ctl="logoreset">Reset to Spendflo</button></div></div>'
   +'<div class="isec"><div class="ih">Danger zone</div><button class="tbtn" style="width:100%;justify-content:center;color:#dc2626;border-color:var(--ui-line)" id="resetDoc">Reset document</button></div>';
   $$('[data-it]',insp).forEach(function(t){t.onclick=function(){itab=t.dataset.it;inspector();};});
   insp.querySelector('[data-f=".zoom"]').onchange=function(e){setZoom(parseInt(e.target.value)/100);};
   $('#resetDoc').onclick=function(){if(confirm('Reset the whole document?')){doc=(CFG.defaultDoc?CFG.defaultDoc(REG,uid):defDoc());sel=null;render();inspector();recordNow();toast('Document reset');}};
   return;}
 var b=sel?blockById(sel):null;
 if(!b){insp.innerHTML=tabs+'<div class="empty">Select a block on the canvas to edit its content, colours, spacing and layout.<br><br>Or add one from the left.</div>';$$('[data-it]',insp).forEach(function(t){t.onclick=function(){itab=t.dataset.it;inspector();};});return;}
 var r=REG[b.type];
 var h=tabs+'<div class="isec"><div class="ih">'+r.label+'</div>'+content(b)+'</div>';
 h+='<div class="isec"><div class="ih">Style</div>';
 if(b.type!=='spacer'&&b.type!=='divider'&&b.type!=='header'&&b.type!=='footer'&&b.type!=='cover')h+='<div class="field"><label>Alignment</label><div class="seg"><button class="'+(b.align==='left'?'on':'')+'" data-ctl="align" data-v="left">'+SVG('alignL')+'</button><button class="'+(b.align==='center'?'on':'')+'" data-ctl="align" data-v="center">'+SVG('alignC')+'</button><button class="'+(b.align==='right'?'on':'')+'" data-ctl="align" data-v="right">'+SVG('alignR')+'</button></div></div>';
 h+=colorRow('Background','bg',b.bg);
 if(b.type!=='divider'&&b.type!=='spacer')h+=colorRow('Text colour','fg',b.fg);
 if(b.type!=='spacer'&&b.type!=='header'){h+=fRange('Space top','pt',b.pt,0,120);h+=fRange('Space bottom','pb',b.pb,0,120);}
 h+='</div>';
 h+='<div class="isec"><div class="ih">Block</div><div class="seg" style="margin-bottom:0"><button data-ba="up">'+SVG('up')+'</button><button data-ba="dn">'+SVG('dn')+'</button><button data-ba="dup">'+SVG('dup')+'</button><button data-ba="hide">'+SVG(b.hidden?'eyeoff':'eye')+'</button><button data-ba="del" style="color:#dc2626">'+SVG('trash')+'</button></div></div>';
 insp.innerHTML=h;
 $$('[data-it]',insp).forEach(function(t){t.onclick=function(){itab=t.dataset.it;inspector();};});
 $$('[data-ba]',insp).forEach(function(x){x.onclick=function(){act(x.dataset.ba,b);};});
}

function bindInsp(){var insp=$('#insp');
 insp.addEventListener('input',function(e){var c=e.target.closest('[data-ctl]');if(!c)return;var b=blockById(sel);if(!b)return;var t=c.dataset.ctl;
   if(t==='text'||t==='area'||t==='hextext'){setPath(b,c.dataset.f,c.value);renderKeepInsp();record();}
   else if(t==='rng'){setPath(b,c.dataset.f,parseInt(c.value)||0);var lab=c.closest('.field').querySelector('span.mono');if(lab)lab.textContent=c.value+'px';renderKeepInsp();record();}});
 insp.addEventListener('change',function(e){var c=e.target.closest('[data-ctl]');if(!c)return;var b=blockById(sel);if(!b)return;if(c.dataset.ctl==='sel'&&c.dataset.f!=='.zoom'){setPath(b,c.dataset.f,c.value);render();inspector();recordNow();}});
 insp.addEventListener('click',function(e){var c=e.target.closest('[data-ctl]');if(!c)return;var b=blockById(sel);var t=c.dataset.ctl;
   if(t==='tog'){setPath(b,c.dataset.f,!getPath(b,c.dataset.f));render();inspector();recordNow();}
   else if(t==='align'){b.align=c.dataset.v;render();inspector();recordNow();}
   else if(t==='hex'){setPath(b,c.dataset.f,c.dataset.hex);render();inspector();recordNow();}
   else if(t==='arradd'){arrAdd(b,c.dataset.arr);render();inspector();recordNow();}
   else if(t==='arrdel'){arrDel(b,c.dataset.arr,+c.dataset.i);render();inspector();recordNow();}
   else if(t==='img'){imgTarget={id:b.id,f:c.dataset.f};$('#fileImg').click();}
   else if(t==='imgclear'){setPath(b,c.dataset.f,'');render();inspector();recordNow();}
   else if(t==='logo'){logoTarget=(c.dataset.scope==='all')?'ALL':(b?b.id:'ALL');$('#fileLogo').click();}
   else if(t==='logoclear'){b.logoImg='';render();inspector();recordNow();}
   else if(t==='logoreset'){doc.forEach(function(x){if(x.logoImg!==undefined)x.logoImg='';});render();inspector();recordNow();toast('Logos reset');}});
}
function bindInsp2(){var insp=$('#insp');insp.addEventListener('click',function(e){var c=e.target.closest('[data-ctl]');if(!c)return;var b=blockById(sel);if(!b)return;var t=c.dataset.ctl;
 if(t==='variant'){b.variant=c.dataset.v;render();inspector();recordNow();}
 else if(t==='rowadd'){b.rows.push(b.cols.map(function(){return 'Cell';}));render();inspector();recordNow();}
 else if(t==='rowdel'){if(b.rows.length>1){b.rows.pop();render();inspector();recordNow();}}
 else if(t==='coladd'){b.cols.push('Column');b.rows.forEach(function(r){r.push('Cell');});render();inspector();recordNow();}
 else if(t==='coldel'){if(b.cols.length>1){b.cols.pop();b.rows.forEach(function(r){r.pop();});render();inspector();recordNow();}}});}
function renderKeepInsp(){render();}
function arrAdd(b,arr){var last=arr.split('.').pop();var v;if(last==='stats')v={v:'00',c:'Metric'};else if(last==='steps')v={t:'Step title',d:'Describe this step.'};else if(last==='paras')v='New paragraph.';else if(last==='links')v='Link';else v='New item';getPath(b,arr).push(v);}
function arrDel(b,arr,i){var a=getPath(b,arr);if(a.length<=1){toast('Keep at least one');return;}a.splice(i,1);}

/* ---------------- toast + modals ---------------- */
var toastT;function toast(m){var t=$('#toast');$('#toastMsg').textContent=m;t.classList.add('show');clearTimeout(toastT);toastT=setTimeout(function(){t.classList.remove('show');},1900);}

/* ---------------- zoom (sizer model; export resets it) ---------------- */
function sheetH(){var s=$('#sheet');return (PAGED?Math.max(PAGE_H,s.scrollHeight):s.scrollHeight)||PAGE_H;}
function setZoom(z){zoom=Math.max(.25,Math.min(4,z));var st=$('#stage'),sz=$('#sizer');st.style.transform='scale('+zoom+')';sz.style.width=(PAGE_W*zoom)+'px';sz.style.height=(sheetH()*zoom)+'px';var l=$('#zLbl');if(l)l.textContent=Math.round(zoom*100)+'%';}
function zoomAnchored(nz,ax,ay){var wrap=$('#cwrap'),sz=$('#sizer');var b=sz.getBoundingClientRect();var fx=b.width?(ax-b.left)/b.width:.5,fy=b.height?(ay-b.top)/b.height:.5;setZoom(nz);var a=sz.getBoundingClientRect();wrap.scrollLeft+=(a.left+fx*a.width)-ax;wrap.scrollTop+=(a.top+fy*a.height)-ay;}
function zoomStep(f){var r=$('#cwrap').getBoundingClientRect();zoomAnchored(zoom*f,r.left+r.width/2,r.top+r.height/2);}
function centerX(){var wrap=$('#cwrap'),sz=$('#sizer');wrap.scrollLeft=Math.max(0,(sz.offsetWidth-wrap.clientWidth)/2);}
function fitPage(){var wrap=$('#cwrap');setZoom(Math.min((wrap.clientWidth-64)/PAGE_W,(wrap.clientHeight-64)/sheetH()));centerX();}
function initZoom(){var wrap=$('#cwrap');setZoom(Math.min(1,(wrap.clientWidth-64)/PAGE_W));centerX();}

/* ---------------- export ---------------- */
var ROOTVARS=':root{--maroon:#390021;--mag:#e92589;--g1:#f34db2;--g2:#e01659;--grad:linear-gradient(135deg,#e92589,#f34db2);--page:#f4f3f1;--card:#fff;--ink:#1a1a1a;--ink2:#575757;--ink3:#8b8b8b;--blush:#fdeef6;--line:#e7e3df}';
function captureSheet(scale){return new Promise(function(resolve,reject){
  var sheet=$('#sheet'),stage=$('#stage');var had=sel;sel=null;sheet.classList.remove('editing');syncSel();
  var prevT=stage.style.transform;stage.style.transform='none';
  var done=function(){var H=sheet.scrollHeight;
    html2canvas(sheet,{scale:scale,backgroundColor:'#ffffff',useCORS:true,logging:false,width:PAGE_W,height:H,windowWidth:PAGE_W,windowHeight:H})
    .then(function(cv){stage.style.transform=prevT;sheet.classList.add('editing');sel=had;syncSel();resolve(cv);})
    .catch(function(err){stage.style.transform=prevT;sheet.classList.add('editing');sel=had;syncSel();reject(err);});};
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(done,60);});
});}
function captureEl(el,scale){return new Promise(function(resolve,reject){
  var sheet=$('#sheet'),stage=$('#stage');var had=sel;sel=null;sheet.classList.remove('editing');syncSel();
  var prevT=stage.style.transform;stage.style.transform='none';
  var done=function(){var H=el.scrollHeight,W=el.offsetWidth||PAGE_W;
    html2canvas(el,{scale:scale,backgroundColor:'#ffffff',useCORS:true,logging:false,width:W,height:H,windowWidth:W,windowHeight:H})
    .then(function(cv){stage.style.transform=prevT;sheet.classList.add('editing');sel=had;syncSel();resolve(cv);})
    .catch(function(err){stage.style.transform=prevT;sheet.classList.add('editing');sel=had;syncSel();reject(err);});};
  (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){setTimeout(done,60);});
});}
function dl(href,name){var a=document.createElement('a');a.href=href;a.download=name;document.body.appendChild(a);a.click();a.remove();}
function fname(ext){return 'spendflo-'+(CFG.fileBase||CFG.key||'doc')+'.'+ext;}
function exportPNG(){toast('Rendering PNG…');
  if(PAGED){var pages=$$('#sheet .page'),sc=2.5,cvs=[];
    (function nx(i){ if(i>=pages.length){compose();return;} captureEl(pages[i],sc).then(function(cv){cvs.push(cv);nx(i+1);}).catch(function(e){console.error(e);toast('Export failed');}); })(0);
    function compose(){var gap=Math.round(30*sc);var w=Math.max.apply(null,cvs.map(function(c){return c.width;}));var h=cvs.reduce(function(a,c){return a+c.height;},0)+gap*(cvs.length-1);var out=document.createElement('canvas');out.width=w;out.height=h;var cx=out.getContext('2d');cx.fillStyle='#e9e9ec';cx.fillRect(0,0,w,h);var y=0;cvs.forEach(function(c){cx.drawImage(c,Math.round((w-c.width)/2),y);y+=c.height+gap;});dl(out.toDataURL('image/png'),fname('png'));toast('PNG downloaded');}
  } else { captureSheet(2.5).then(function(cv){dl(cv.toDataURL('image/png'),fname('png'));toast('PNG downloaded');}).catch(function(e){console.error(e);toast('Export failed');}); }
}
function exportPDF(){toast('Rendering PDF…');var jsPDF=window.jspdf.jsPDF;
  if(PAGED){var pages=$$('#sheet .page');var pdf=new jsPDF({unit:'mm',format:'a4',compress:true});
    (function nx(i){ if(i>=pages.length){pdf.save(fname('pdf'));toast('PDF downloaded');return;} captureEl(pages[i],2480/PAGE_W).then(function(cv){ if(i)pdf.addPage(); pdf.addImage(cv.toDataURL('image/jpeg',0.95),'JPEG',0,0,210,297); nx(i+1); }).catch(function(e){console.error(e);toast('Export failed');}); })(0);
  } else { var sc=2.4;captureSheet(sc).then(function(cv){var wmm=PAGE_W*25.4/96,hmm=(cv.height/sc)*25.4/96;var pdf2=new jsPDF({unit:'mm',format:[wmm,hmm],orientation:wmm>hmm?'l':'p',compress:true});pdf2.addImage(cv.toDataURL('image/jpeg',0.96),'JPEG',0,0,wmm,hmm);pdf2.save(fname('pdf'));toast('PDF downloaded');}).catch(function(e){console.error(e);toast('Export failed');}); }
}
function buildHTML(){
  var body=doc.filter(function(b){return !b.hidden;}).map(function(b){return REG[b.type].render(b);}).join('');
  body=body.replace(/ contenteditable(="[^"]*")?/g,'').replace(/ data-f="[^"]*"/g,'');
  var css=ROOTVARS+BLOCK_CSS+' body{margin:0;background:#e9e9ec;font-family:Inter,system-ui,-apple-system,"Segoe UI",Arial,sans-serif;color:#1a1a1a}.sf-doc{max-width:'+PAGE_W+'px;margin:0 auto;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.08)}.sf-doc img{max-width:100%;height:auto}a{text-decoration:none}@media(max-width:'+PAGE_W+'px){.b-cols .cwrap{grid-template-columns:1fr}}';
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(CFG.title||'Spendflo')+'</title><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><style>'+css+'</style></head><body><div class="sf-doc">'+body+'</div></body></html>';
}
/* ---------- email-safe HTML (newsletter): table + inline styles, no CSS deps ---------- */
var LOGO_PNG={black:null,white:null};
var EMC={maroon:'#390021',mag:'#e92589',ink:'#1a1a1a',ink2:'#575757',ink3:'#8b8b8b',line:'#e7e3df',blush:'#fdeef6',page:'#f4f3f1'};
var EMF="font-family:'Helvetica Neue',Arial,sans-serif";
function svgToPng(uri,h){return new Promise(function(res){try{var img=new Image();img.onload=function(){var nh=img.height||55,nw=img.width||220;var s=(h||52)/nh;var w=Math.round(nw*s),hh=Math.round(nh*s);var c=document.createElement('canvas');c.width=w*2;c.height=hh*2;var cx=c.getContext('2d');cx.drawImage(img,0,0,c.width,c.height);res({url:c.toDataURL('image/png'),w:w,h:hh});};img.onerror=function(){res(null);};img.src=uri;}catch(e){res(null);}});}
function erow(inner,style){return '<tr><td style="'+(style||'')+'">'+inner+'</td></tr>';}
function emLogoW(logos,h){var L=logos&&logos.white;if(L)return '<img src="'+L.url+'" alt="Spendflo" height="'+h+'" style="height:'+h+'px;border:0;display:inline-block">';if(window.SF_LOGO_WHITE)return '<img src="'+window.SF_LOGO_WHITE+'" alt="Spendflo" height="'+h+'" style="height:'+h+'px;border:0;display:inline-block">';return '<b style="color:#fff">Spendflo</b>';}
function elogo(b,logos){if(b.logoImg)return '<img src="'+b.logoImg+'" alt="Spendflo" height="26" style="height:26px;border:0;display:inline-block">';var dark=isDark(b.bg||'#ffffff');var L=dark?logos.white:logos.black;if(L)return '<img src="'+L.url+'" alt="Spendflo" height="'+L.h+'" style="height:'+L.h+'px;border:0;display:inline-block">';var uri=dark?window.SF_LOGO_WHITE:window.SF_LOGO_BLACK;return uri?'<img src="'+uri+'" alt="Spendflo" height="26" style="height:26px;border:0;display:inline-block">':'<span style="font-weight:700;color:'+(dark?'#fff':EMC.maroon)+'">Spendflo</span>';}
function em(b,logos){var side=32,pt=(b.pt!=null?b.pt:16),pb=(b.pb!=null?b.pb:16);var bg=(b.bg&&b.bg!=='#ffffff')?b.bg:'';var fg=b.fg||'';var pad='padding:'+pt+'px '+side+'px '+pb+'px;'+(bg?'background-color:'+bg+';':'')+(fg?'color:'+fg+';':'');var al=b.align||'left';var v=b.variant;
 switch(b.type){
  case'header':{var hv=v||'split';var hbg=hv==='banner'?EMC.mag:(bg||'#ffffff');var col=hv==='banner'?'#fff':(fg||EMC.ink);var lg=hv==='banner'?emLogoW(logos,24):elogo(b,logos);var rt=b.showRight?'<span style="font-size:12px;color:'+col+';opacity:.85">'+esc(b.right)+'</span>':'';if(hv==='centered'||hv==='stacked')return erow('<div style="text-align:'+(hv==='centered'?'center':'left')+'">'+lg+(rt?'<div style="margin-top:6px">'+rt+'</div>':'')+'</div>','padding:22px '+side+'px;background-color:'+hbg+';'+EMF);return erow('<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="left" style="'+EMF+'">'+lg+'</td><td align="right" style="'+EMF+'">'+rt+'</td></tr></table>','padding:22px '+side+'px;background-color:'+hbg+';'+EMF);}
  case'heading':{var hv=v||'eyebrow';var eb=(hv==='eyebrow'&&b.showEyebrow)?'<div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:'+EMC.mag+';margin:0 0 10px;'+EMF+'">'+esc(b.eyebrow)+'</div>':'';var num=hv==='numbered'?'<span style="color:'+EMC.mag+';font-weight:700;margin-right:10px">'+esc(b.num)+'</span>':'';return erow(eb+'<div style="font-size:'+(b.fs||24)+'px;font-weight:700;line-height:1.2;color:'+(fg||EMC.ink)+';text-align:'+al+';'+EMF+(hv==='accent'?';border-left:4px solid '+EMC.mag+';padding-left:14px':'')+'">'+num+esc(b.head)+'</div>',pad);}
  case'text':return erow(b.paras.map(function(p){return '<p style="margin:0 0 12px;font-size:'+(b.fs||15)+'px;line-height:1.62;color:'+(fg||EMC.ink2)+';text-align:'+al+';'+EMF+'">'+esc(p)+'</p>';}).join(''),pad);
  case'image':return b.src?erow('<img src="'+b.src+'" width="536" style="width:100%;max-width:100%;border:0;border-radius:'+(v==='full'?'0':'10px')+';display:block">'+(b.showCap?'<div style="font-size:12px;color:'+EMC.ink3+';margin-top:8px;'+EMF+'">'+esc(b.cap)+'</div>':''),pad):erow('<div style="background:'+EMC.blush+';border-radius:10px;height:180px"></div>',pad);
  case'button':{var bv=v||'inline';var rad=bv==='pill'?'100px':'8px';var bar=bv==='bar';var full=bv==='block';var a='<a href="'+esc(b.url1||'#')+'" style="'+EMF+';display:'+(full?'block':'inline-block')+';background-color:'+EMC.mag+';color:#fff;font-size:14px;font-weight:600;text-decoration:none;padding:13px 26px;border-radius:'+rad+';text-align:center">'+esc(b.btn1)+'</a>';var a2=b.showBtn2?' &nbsp; <a href="'+esc(b.url2||'#')+'" style="'+EMF+';display:inline-block;border:2px solid '+EMC.ink+';color:'+EMC.ink+';font-size:14px;font-weight:600;text-decoration:none;padding:11px 24px;border-radius:'+rad+'">'+esc(b.btn2)+'</a>':'';return erow('<div style="text-align:'+(bar?'center':al)+'">'+a+a2+'</div>','padding:'+pt+'px '+side+'px '+pb+'px;'+(bar?'background-color:'+EMC.blush+';':(bg?'background-color:'+bg+';':'')));}
  case'cols':{var cv=v||'imgleft';var img=b.img?'<img src="'+b.img+'" width="240" style="width:100%;border:0;border-radius:10px;display:block">':'<div style="background:'+EMC.blush+';border-radius:10px;height:150px"></div>';var txt='<div style="font-size:16px;font-weight:600;color:'+(fg||EMC.ink)+';margin:0 0 8px;'+EMF+'">'+esc(b.h)+'</div><div style="font-size:14px;line-height:1.6;color:'+(fg||EMC.ink2)+';'+EMF+'">'+esc(b.p)+'</div>';if(cv==='stacked'||cv==='card')return erow('<div style="'+(cv==='card'?'border:1px solid '+EMC.line+';border-radius:12px;overflow:hidden':'')+'">'+img+'<div style="padding:'+(cv==='card'?'18px':'14px 0 0')+'">'+txt+'</div></div>',pad);var cells=cv==='imgright'?('<td width="52%" valign="top" style="padding-right:16px">'+txt+'</td><td width="48%" valign="top">'+img+'</td>'):('<td width="48%" valign="top" style="padding-right:16px">'+img+'</td><td width="52%" valign="top">'+txt+'</td>');return erow('<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>'+cells+'</tr></table>',pad);}
  case'quote':{var qv=v||'speaker';var spk=(qv!=='plain')?'<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:14px'+(qv==='centered'?';margin-left:auto;margin-right:auto':'')+'"><tr><td><div style="width:38px;height:38px;border-radius:50%;background:'+EMC.mag+';color:#fff;text-align:center;line-height:38px;font-weight:700">'+esc((b.name||'?').charAt(0))+'</div></td><td style="padding-left:10px;text-align:left"><div style="font-size:13px;font-weight:700;color:'+(fg||EMC.ink)+'">'+esc(b.name)+'</div><div style="font-size:12px;color:'+EMC.ink3+'">'+esc(b.role)+'</div></td></tr></table>':'';var card=qv==='card',cen=qv==='centered';return erow('<div style="'+EMF+';'+(card?'background:'+EMC.blush+';border-radius:12px;padding:24px;':'')+(cen?'text-align:center;':'border-left:3px solid '+EMC.mag+';padding-left:18px;')+'"><div style="font-size:'+(cen?21:19)+'px;line-height:1.45;font-weight:500;color:'+(fg||EMC.ink)+'">'+esc(b.quote)+'</div>'+spk+'</div>',pad);}
  case'callout':{var cv=v||'box';var cbg=cv==='dark'?EMC.maroon:(cv==='gradient'?EMC.mag:(cv==='box'?EMC.blush:''));var cc=(cv==='dark'||cv==='gradient')?'#fff':EMC.ink;var lc=(cv==='dark'||cv==='gradient')?'#fff':EMC.mag;return erow('<div style="'+EMF+';'+(cv==='line'?'border-left:3px solid '+EMC.mag+';padding-left:20px;':'padding:22px;border-radius:12px;background-color:'+cbg+';')+'color:'+cc+'">'+(b.lbl?'<div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:'+lc+';margin:0 0 8px">'+esc(b.lbl)+'</div>':'')+'<div style="font-size:17px;line-height:1.5;font-weight:600">'+esc(b.stmt)+'</div>'+(b.showStmt2?'<div style="font-size:15px;line-height:1.5;margin-top:10px;opacity:.9">'+esc(b.stmt2)+'</div>':'')+'</div>',pad);}
  case'stats':{var n=b.stats.length||1;var cells=b.stats.map(function(s){return '<td width="'+Math.floor(100/n)+'%" valign="top" style="padding-right:16px;'+EMF+'"><div style="font-size:32px;font-weight:700;color:'+EMC.maroon+';line-height:1.05">'+esc(s.v)+'</div><div style="font-size:12px;color:'+(fg||EMC.ink2)+';opacity:.78;margin-top:6px;line-height:1.4">'+esc(s.c)+'</div></td>';}).join('');return erow('<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>'+cells+'</tr></table>'+(b.showSrc?'<div style="font-size:11px;color:'+EMC.ink3+';font-style:italic;margin-top:14px;'+EMF+'">'+esc(b.src)+'</div>':''),pad);}
  case'list':{var lv=v||'dots';var i=0;var items=b.items.map(function(it){i++;var mk=lv==='checks'?'&#10003;':lv==='numbered'?(i+'.'):'&bull;';return '<tr><td valign="top" style="color:'+EMC.mag+';font-weight:700;padding:0 10px 9px 0;'+EMF+'">'+mk+'</td><td valign="top" style="font-size:14.5px;line-height:1.5;color:'+(fg||EMC.ink2)+';padding-bottom:9px;'+EMF+'">'+esc(it)+'</td></tr>';}).join('');return erow('<table role="presentation" cellpadding="0" cellspacing="0">'+items+'</table>',pad);}
  case'divider':return erow('<div style="border-top:1px solid '+EMC.line+';font-size:0;line-height:0">&nbsp;</div>','padding:'+pt+'px '+side+'px '+pb+'px;'+(bg?'background-color:'+bg+';':''));
  case'spacer':return erow('<div style="height:'+b.h+'px;font-size:0;line-height:0">&nbsp;</div>','padding:0;'+(b.bg&&b.bg!=='#ffffff'?'background-color:'+b.bg:''));
  case'footer':{var fv=v||'bar';var lg=b.showLogo?emLogoW(logos,22):'';var links=(b.links||[]).map(function(l){return '<span style="color:#fff;opacity:.85;font-size:13px;margin:0 9px;'+EMF+'">'+esc(l)+'</span>';}).join('');var dis=b.dis?'<div style="font-size:11px;color:#fff;opacity:.6;margin-top:14px;line-height:1.5;'+EMF+'">'+esc(b.dis)+'</div>':'';if(fv==='cta')return erow('<div style="color:#fff;'+EMF+'">'+lg+'<div style="font-size:22px;font-weight:700;margin:14px 0 8px">'+esc(b.h)+'</div><div style="font-size:14px;line-height:1.6;opacity:.86;margin-bottom:16px">'+esc(b.p)+'</div><a href="'+esc(b.url||'#')+'" style="display:inline-block;background-color:'+EMC.mag+';color:#fff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 26px;border-radius:10px">'+esc(b.cta)+'</a></div>','padding:40px '+side+'px;background-color:'+EMC.maroon);var body=(fv==='centered'||fv==='social')?('<div style="text-align:center">'+lg+'<div style="margin-top:12px">'+links+'</div>'+dis+'</div>'):('<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="left">'+lg+'</td><td align="right">'+links+'</td></tr></table>'+dis);return erow(body,'padding:30px '+side+'px;background-color:'+EMC.maroon+';color:#fff');}
 }return '';
}
function buildEmailHTML(logos){logos=logos||LOGO_PNG||{black:null,white:null};var rows=doc.filter(function(b){return !b.hidden;}).map(function(b){return em(b,logos);}).join('');
 return '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(CFG.title||'Spendflo Newsletter')+'</title></head>'
 +'<body style="margin:0;padding:0;background-color:'+EMC.page+';'+EMF+'">'
 +'<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:'+EMC.page+'"><tr><td align="center" style="padding:24px 12px">'
 +'<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:14px;overflow:hidden">'
 +rows+'</table></td></tr></table></body></html>';}
function withLogos(cb){Promise.all([svgToPng(window.SF_LOGO_BLACK,52),svgToPng(window.SF_LOGO_WHITE,44)]).then(function(r){cb({black:r[0],white:r[1]});});}
function primeLogos(){try{withLogos(function(l){LOGO_PNG={black:l.black,white:l.white};});}catch(e){}}
function showCopyBox(html){var ov=document.createElement('div');ov.className='sf-copybox';ov.innerHTML='<div class="cb-card"><div class="cb-hd"><b>Copy HTML</b><button class="cb-x" title="Close">\u2715</button></div><p class="cb-p">Select all &amp; copy (\u2318/Ctrl + C), then paste into Gmail, HubSpot or your ESP.</p><textarea readonly spellcheck="false"></textarea><div class="cb-ft"><button class="cb-sel">Select all</button></div></div>';document.body.appendChild(ov);var ta=ov.querySelector('textarea');ta.value=html;var close=function(){ov.remove();};ov.addEventListener('mousedown',function(e){if(e.target===ov)close();});ov.querySelector('.cb-x').onclick=close;ov.querySelector('.cb-sel').onclick=function(){ta.focus();ta.select();};setTimeout(function(){ta.focus();ta.select();},30);}
function copyHTML(){var html=PAGED?buildHTML():buildEmailHTML();var kb=Math.round(html.length/1024);var warn=(!PAGED&&html.length>180000);var ok=function(){toast(warn?('Copied \u2014 but large ('+kb+' KB); some tools cap paste size. Use smaller images or Download HTML.'):'HTML copied \u2014 paste anywhere');};var viaExec=function(){var okc=false;try{var t=document.createElement('textarea');t.value=html;t.setAttribute('readonly','');t.style.cssText='position:fixed;top:0;left:0;width:1px;height:1px;opacity:0';document.body.appendChild(t);t.focus();t.select();try{t.setSelectionRange(0,html.length);}catch(e){}okc=document.execCommand('copy');t.remove();}catch(e){okc=false;}if(okc)ok();else showCopyBox(html);};try{if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(html).then(ok,viaExec);}else viaExec();}catch(e){viaExec();}}
function exportHTML(){var html=PAGED?buildHTML():buildEmailHTML();var blob=new Blob([html],{type:'text/html'});var u=URL.createObjectURL(blob);dl(u,fname('html'));setTimeout(function(){URL.revokeObjectURL(u);},1500);toast('HTML downloaded');}
function exportJSON(){var blob=new Blob([JSON.stringify({v:1,key:CFG.key,doc:doc},null,2)],{type:'application/json'});var u=URL.createObjectURL(blob);dl(u,fname('json'));setTimeout(function(){URL.revokeObjectURL(u);},1200);toast('Design file downloaded');}

/* ---------------- templates ---------------- */
function savedTpls(){try{return JSON.parse(localStorage.getItem(LS_TPL))||[];}catch(e){return [];}}
function setSaved(a){localStorage.setItem(LS_TPL,JSON.stringify(a));}
function openTpl(){var saved=savedTpls();var th='<span class="th"><i style="top:8px;width:70%"></i><i style="top:19px;width:50%"></i><i style="top:30px;width:80%"></i><i style="top:41px;width:40%"></i></span>';
  var bi=(CFG.builtin||[]).map(function(t,i){return '<div class="tpl" data-b="'+i+'">'+th+'<span><span class="nm">'+esc(t.name)+'</span><small>'+esc(t.desc||'')+'</small></span></div>';}).join('');
  var sv=saved.length?('<div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600;margin:14px 0 8px">Saved in this browser</div>'+saved.map(function(t,i){return '<div class="tpl" data-s="'+i+'">'+th+'<span><span class="nm">'+esc(t.name)+'</span><small>'+t.doc.length+' blocks</small></span><button class="del" data-del="'+i+'">'+SVG('trash')+'</button></div>';}).join('')):'';
  $('#tplList').innerHTML=(CFG.builtin&&CFG.builtin.length?'<div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--ui-txt3);font-weight:600;margin:2px 0 8px">Built-in</div>':'')+bi+sv;
  $('#tplModal').classList.add('open');}
function loadDocArr(arr){doc=clone(arr).map(function(b){b.id=uid();if(b.hidden==null)b.hidden=false;return b;});sel=null;render();inspector();recordNow();$('#tplModal').classList.remove('open');toast('Template loaded');}

/* ---------------- preview ---------------- */
function setPreview(on){var app=$('#app'),sheet=$('#sheet');app.classList.toggle('preview',on);$('#bExit').style.display=on?'inline-flex':'none';if(on){sel=null;sheet.classList.remove('editing');syncSel();}else{sheet.classList.add('editing');}setTimeout(fitPage,30);}

/* ---------------- init ---------------- */
function init(){
  mount();bindSheet();bindPalette();bindTree();bindInsp();bindInsp2();bindUploads();primeLogos();
  renderPalette();doc=load();render();inspector();recordNow();initZoom();
  // top bar
  $('#bUndo').onclick=undo;$('#bRedo').onclick=redo;
  $('#bTpl').onclick=openTpl;$('#bSaveTpl').onclick=function(){$('#tplName').value='';$('#saveModal').classList.add('open');setTimeout(function(){$('#tplName').focus();},40);};
  $('#tplSaveGo').onclick=function(){var n=$('#tplName').value.trim();if(!n){toast('Name your template');return;}var a=savedTpls();a.unshift({name:n,doc:clone(doc)});setSaved(a);$('#saveModal').classList.remove('open');toast('Template saved');};
  $('#tplList').addEventListener('click',function(e){var del=e.target.closest('[data-del]');if(del){e.stopPropagation();var a=savedTpls();a.splice(+del.dataset.del,1);setSaved(a);openTpl();return;}var bt=e.target.closest('[data-b]');if(bt){loadDocArr(CFG.builtin[+bt.dataset.b].make(REG,uid));return;}var st=e.target.closest('[data-s]');if(st){loadDocArr(savedTpls()[+st.dataset.s].doc);}});
  $('#bPreview').onclick=function(){setPreview(true);};$('#bExit').onclick=function(){setPreview(false);};
  var em=$('#expMenu');$('#bExp').onclick=function(e){e.stopPropagation();em.classList.toggle('open');};document.addEventListener('click',function(){em.classList.remove('open');});
  em.querySelector('.pop').addEventListener('click',function(e){var b=e.target.closest('[data-exp]');if(!b)return;em.classList.remove('open');var x=b.dataset.exp;if(x==='pdf')exportPDF();else if(x==='png')exportPNG();else if(x==='html')exportHTML();else if(x==='copyhtml')copyHTML();else if(x==='json')exportJSON();else if(x==='import')$('#fileJson').click();});
  $('#fileJson').addEventListener('change',function(e){var f=e.target.files[0];if(!f)return;var rd=new FileReader();rd.onload=function(){try{var j=JSON.parse(rd.result);var arr=Array.isArray(j)?j:j.doc;if(!Array.isArray(arr)||!arr.length||!arr[0].type)throw 0;loadDocArr(arr);toast('Design imported');}catch(err){toast('Not a valid design file');}e.target.value='';};rd.readAsText(f);});
  // zoom controls
  $('#zIn').onclick=function(){zoomStep(1.2);};$('#zOut').onclick=function(){zoomStep(1/1.2);};$('#zLbl').onclick=function(){zoomStep(1/zoom);};$('#zFit').onclick=fitPage;
  $('#cwrap').addEventListener('wheel',function(e){if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();zoomAnchored(zoom*Math.exp(-e.deltaY*0.0018),e.clientX,e.clientY);},{passive:false});
  $$('[data-close]').forEach(function(b){b.onclick=function(){$$('.modal').forEach(function(m){m.classList.remove('open');});};});
  $$('.modal').forEach(function(m){m.addEventListener('click',function(e){if(e.target===m)m.classList.remove('open');});});
  // keyboard
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){$$('.modal').forEach(function(m){m.classList.remove('open');});em.classList.remove('open');if($('#app').classList.contains('preview'))setPreview(false);}
    var meta=e.metaKey||e.ctrlKey;
    if(meta){var k=e.key.toLowerCase();
      if(k==='z'&&!e.shiftKey){e.preventDefault();undo();return;}
      if((k==='z'&&e.shiftKey)||k==='y'){e.preventDefault();redo();return;}
      if(e.key==='='||e.key==='+'){e.preventDefault();zoomStep(1.2);return;}
      if(e.key==='-'||e.key==='_'){e.preventDefault();zoomStep(1/1.2);return;}
      if(e.key==='0'){e.preventDefault();fitPage();return;}
      if(e.key==='1'){e.preventDefault();zoomStep(1/zoom);return;}}
    var typing=/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)||document.activeElement.isContentEditable;
    if(typing)return;var b=sel?blockById(sel):null;if(!b)return;
    if(e.key==='Backspace'||e.key==='Delete'){e.preventDefault();act('del',b);}
    else if(meta&&e.key.toLowerCase()==='d'){e.preventDefault();act('dup',b);}
  },true);
  window.addEventListener('resize',function(){});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
