import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleVmwareengineVcenterCredentialsArgs {
  parent: string;
}

export class data_google_vmwareengine_vcenter_credentials extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleVmwareengineVcenterCredentialsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_vmwareengine_vcenter_credentials", resourceName);
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
