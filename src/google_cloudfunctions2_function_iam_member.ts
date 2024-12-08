import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctions2FunctionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudfunctions2FunctionIamMemberArgs {
  cloud_function: string;
  member: string;
  role: string;
  condition?: GoogleCloudfunctions2FunctionIamMemberArgsCondition;
}

export class google_cloudfunctions2_function_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudfunctions2FunctionIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions2_function_iam_member", resourceName);
  }

  get cloud_function(): string {
    return `${this.resourceType}.${this.resourceName}.cloud_function`;
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
