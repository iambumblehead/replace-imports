replace-imports
===============

Replace import statements. Similar to [replace-requires][1], but for es6 import rather than commonjs require.

``` javascript
let filecontent = `
  import defaultExportA from "moduleA";
  import * as nameB from "moduleB";
  import { exportC } from "moduleC";
  import { exportD as aliasD } from "moduleD";
  import { exportE1 , exportE2 } from "moduleE";
  import { exportF1 , exportF2 as aliasF2 } from "moduleF";
  import defaultExportH, * as nameH from "moduleH";
  import "moduleI";`;
    
replaceimports(filecontent, {
  moduleA : '/path/to/moduleA',
  moduleB : '/path/to/moduleB',
  moduleC : '/path/to/moduleC',
  moduleD : '/path/to/moduleD',
  moduleE : '/path/to/moduleE',
  moduleF : '/path/to/moduleF',
  moduleG : '/path/to/moduleG',
  moduleH : '/path/to/moduleH',
  moduleI : '/path/to/moduleI'
});
//  import defaultExportA from "/path/to/moduleA";
//  import * as nameB from "/path/to/moduleB";
//  import { exportC } from "/path/to/moduleC";
//  import { exportD as aliasD } from "/path/to/moduleD";
//  import { exportE1 , exportE2 } from "/path/to/moduleE";
//  import { exportF1 , exportF2 as aliasF2 } from "/path/to/moduleF";
//  import defaultExportH, * as nameH from "/path/to/moduleH";
//  import "/path/to/moduleI";
```

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: https://github.com/bendrucker/replace-requires "replace-requires"

![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png)

(The MIT License)

Copyright (c) [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
