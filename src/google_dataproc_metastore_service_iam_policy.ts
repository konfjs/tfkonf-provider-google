import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocMetastoreServiceIamPolicyArgs {
  policy_data: string;
  service_id: string;
}

export class google_dataproc_metastore_service_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocMetastoreServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataproc_metastore_service_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
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

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
