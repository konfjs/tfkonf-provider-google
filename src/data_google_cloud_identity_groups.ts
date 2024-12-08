import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudIdentityGroupsArgs {
  parent: string;
}

export class data_google_cloud_identity_groups extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleCloudIdentityGroupsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_identity_groups", resourceName);
  }

  get groups(): string {
    return `data.${this.resourceType}.${this.resourceName}.groups`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }
}
