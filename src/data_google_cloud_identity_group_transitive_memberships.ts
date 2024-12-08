import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudIdentityGroupTransitiveMembershipsArgs {
  group: string;
}

export class data_google_cloud_identity_group_transitive_memberships extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudIdentityGroupTransitiveMembershipsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_cloud_identity_group_transitive_memberships", resourceName);
  }

  get group(): string {
    return `data.${this.resourceType}.${this.resourceName}.group`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get memberships(): string {
    return `data.${this.resourceType}.${this.resourceName}.memberships`;
  }
}
