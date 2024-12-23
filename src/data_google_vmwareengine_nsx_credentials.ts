import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineNsxCredentialsArgs {
  parent: string;
}

export class data_google_vmwareengine_nsx_credentials extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleVmwareengineNsxCredentialsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_nsx_credentials", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }

  get password(): string {
    return `data.${this.resourceType}.${this.resourceName}.password`;
  }

  get username(): string {
    return `data.${this.resourceType}.${this.resourceName}.username`;
  }
}
