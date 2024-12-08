import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocJobIamBindingArgs {
  job_id: string;
  members: string[];
  role: string;
  condition?: GoogleDataprocJobIamBindingArgsCondition;
}

export class google_dataproc_job_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataprocJobIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_job_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
