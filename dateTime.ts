import {
    dayOfYear,
    weekOfYear,
} from "https://deno.land/std@0.68.0/datetime/mod.ts";

console.log(dayOfYear(new Date('2020-09-11')));
console.log(weekOfYear(new Date("2020-09-11")));
