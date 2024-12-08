import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleTpuTensorflowVersionsArgs {
}

export class data_google_tpu_tensorflow_versions extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleTpuTensorflowVersionsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_tpu_tensorflow_versions", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get versions(): string {
    return `data.${this.resourceType}.${this.resourceName}.versions`;
  }

  get zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.zone`;
  }
}
