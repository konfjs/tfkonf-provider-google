import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataprocClusterIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleDataprocClusterIamMemberArgs {
  cluster: string;
  member: string;
  role: string;
  condition?: GoogleDataprocClusterIamMemberArgsCondition;
}

export class google_dataproc_cluster_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataprocClusterIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dataproc_cluster_iam_member", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
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
