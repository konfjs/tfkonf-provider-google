import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreFederationIamPolicyArgs {
  federation_id: string;
  policy_data: string;
}

export class google_dataproc_metastore_federation_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocMetastoreFederationIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_federation_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get federation_id(): string {
    return `${this.resourceType}.${this.resourceName}.federation_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
