import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataplexDatascanIamPolicyArgs {
  data_scan_id: string;
  policy_data: string;
}

export class google_dataplex_datascan_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataplexDatascanIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataplex_datascan_iam_policy", resourceName);
  }

  get data_scan_id(): string {
    return `${this.resourceType}.${this.resourceName}.data_scan_id`;
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
}
