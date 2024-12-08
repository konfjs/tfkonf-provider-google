import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctions2FunctionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudfunctions2FunctionIamBindingArgs {
  cloud_function: string;
  members: string[];
  role: string;
  condition?: GoogleCloudfunctions2FunctionIamBindingArgsCondition;
}

export class google_cloudfunctions2_function_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleCloudfunctions2FunctionIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions2_function_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
