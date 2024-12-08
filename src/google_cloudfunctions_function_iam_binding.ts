import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudfunctionsFunctionIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleCloudfunctionsFunctionIamBindingArgs {
  cloud_function: string;
  members: string[];
  role: string;
  condition?: GoogleCloudfunctionsFunctionIamBindingArgsCondition;
}

export class google_cloudfunctions_function_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudfunctionsFunctionIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloudfunctions_function_iam_binding", resourceName);
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
