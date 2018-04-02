let replaceimports = require('../');

describe("replaceimports", () => {
  let filecontent = `
    import defaultExportA from "moduleA";
    import * as nameB from "moduleB";
    import { exportC } from "moduleC";
    import { exportD as aliasD } from "moduleD";
    import { exportE1 , exportE2 } from "moduleE";
    import { exportF1 , exportF2 as aliasF2 } from "moduleF";
    import defaultExportH, * as nameH from "moduleH";
    import "moduleI";`;
  
  it("should return true", () =>
     expect(replaceimports(filecontent, {
       moduleA : '/path/to/moduleA',
       moduleB : '/path/to/moduleB',
       moduleC : '/path/to/moduleC',
       moduleD : '/path/to/moduleD',
       moduleE : '/path/to/moduleE',
       moduleF : '/path/to/moduleF',
       moduleG : '/path/to/moduleG',
       moduleH : '/path/to/moduleH',
       moduleI : '/path/to/moduleI'
     })).toBe(`
    import defaultExportA from "/path/to/moduleA";
    import * as nameB from "/path/to/moduleB";
    import { exportC } from "/path/to/moduleC";
    import { exportD as aliasD } from "/path/to/moduleD";
    import { exportE1 , exportE2 } from "/path/to/moduleE";
    import { exportF1 , exportF2 as aliasF2 } from "/path/to/moduleF";
    import defaultExportH, * as nameH from "/path/to/moduleH";
    import "/path/to/moduleI";`));
});
