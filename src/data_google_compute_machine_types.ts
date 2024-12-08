import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleComputeMachineTypesArgs {
  filter?: string;
}

export class data_google_compute_machine_types extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleComputeMachineTypesArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_compute_machine_types", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get machine_types(): string {
    return `data.${this.resourceType}.${this.resourceName}.machine_types`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
