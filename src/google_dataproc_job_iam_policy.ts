import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobIamPolicyArgs {
  job_id: string;
  policy_data: string;
}

export class google_dataproc_job_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocJobIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_dataproc_job_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get job_id(): string {
    return `${this.resourceType}.${this.resourceName}.job_id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
