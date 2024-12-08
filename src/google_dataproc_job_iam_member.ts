import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocJobIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocJobIamMemberArgs {
  job_id: string;
  member: string;
  role: string;
  condition?: GoogleDataprocJobIamMemberArgsCondition;
}

export class google_dataproc_job_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocJobIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_job_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
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
