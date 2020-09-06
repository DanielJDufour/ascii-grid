const { readFileSync } = require("fs");
const test = require("ava");

const isAsciiGrid = require("./src/is-ascii-grid");
const parseAsciiGridMetaData = require("./src/parse-ascii-grid-meta");

test("identifying ascii grid file", async (t) => {
  const buffer = readFileSync("./test_data/michigan_lld/michigan_lld.asc");
  const bufferIsAsciiGrid = isAsciiGrid(buffer, { debug: false });
  t.is(bufferIsAsciiGrid, true);
});

test("reading ascii metadata", async (t) => {
  const buffer = readFileSync("./test_data/michigan_lld/michigan_lld.asc");
  const meta = parseAsciiGridMetaData(buffer, { debug: false });

  // check metadata
  t.is(meta.ncols, 4201);
  t.is(meta.nrows, 5365);
  t.is(meta.xllcenter, -88);
  t.is(meta.yllcenter, 41.62);
  t.is(meta.cellsize, 0.0008333333333);
  t.is(meta.nodata_value, -9999);
});
