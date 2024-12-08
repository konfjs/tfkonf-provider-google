import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataprocMetastoreFederationIamPolicyArgs {
  federation_id: string;
}

export class data_google_dataproc_metastore_federation_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDataprocMetastoreFederationIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataproc_metastore_federation_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get federation_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.federation_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
