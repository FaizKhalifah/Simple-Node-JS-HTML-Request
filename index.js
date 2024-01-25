import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";
import http from "http";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

