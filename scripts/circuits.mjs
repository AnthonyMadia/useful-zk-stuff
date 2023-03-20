import { CircuitConfig } from "@unirep/circuits";
import { EPK_R, OMT_R } from "@unirep/utils";
const { FIELD_COUNT } = CircuitConfig.default;

export const ptauName = "powersOfTau28_hez_final_22.ptau";

export const circuitContents = {
  circuitExample: `pragma circom 2.0.0; include "../circuits/circuitExample.circom"; \n\ncomponent main { public [ attester_id, epoch, msghash ] } = circuitExample(${FIELD_COUNT}, ${EPK_R}, 64, 4);`,
};
