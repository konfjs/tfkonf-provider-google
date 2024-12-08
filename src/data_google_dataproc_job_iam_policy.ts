import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDataprocJobIamPolicyArgs {
  job_id: string;
}

export class data_google_dataproc_job_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleDataprocJobIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dataproc_job_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get job_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.job_id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }
}
