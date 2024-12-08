import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctionsFunctionIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudfunctionsFunctionIamMemberArgs {
  cloud_function: string;
  member: string;
  role: string;
  condition?: GoogleCloudfunctionsFunctionIamMemberArgsCondition;
}

export class google_cloudfunctions_function_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudfunctionsFunctionIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions_function_iam_member", resourceName);
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
