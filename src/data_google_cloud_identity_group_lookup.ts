import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleCloudIdentityGroupLookupArgsGroupKey {
  id: string;
  namespace?: string;
}

export interface DataGoogleCloudIdentityGroupLookupArgs {
  group_key: DataGoogleCloudIdentityGroupLookupArgsGroupKey;
}

export class data_google_cloud_identity_group_lookup extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleCloudIdentityGroupLookupArgs) {
    const meta = {group_key:{isBlock:true}};
    super(terraformConfig, "data", args, meta, "google_cloud_identity_group_lookup", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
