import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSecretManagerSecretArgsReplicationAutoCustomerManagedEncryption {
  kms_key_name: string;
}

export interface GoogleSecretManagerSecretArgsReplicationAuto {
  customer_managed_encryption?: GoogleSecretManagerSecretArgsReplicationAutoCustomerManagedEncryption;
}

export interface GoogleSecretManagerSecretArgsReplicationUserManagedReplicasCustomerManagedEncryption {
  kms_key_name: string;
}

export interface GoogleSecretManagerSecretArgsReplicationUserManagedReplicas {
  location: string;
  customer_managed_encryption?: GoogleSecretManagerSecretArgsReplicationUserManagedReplicasCustomerManagedEncryption;
}

export interface GoogleSecretManagerSecretArgsReplicationUserManaged {
  replicas: GoogleSecretManagerSecretArgsReplicationUserManagedReplicas[];
}

export interface GoogleSecretManagerSecretArgsReplication {
  auto?: GoogleSecretManagerSecretArgsReplicationAuto;
  user_managed?: GoogleSecretManagerSecretArgsReplicationUserManaged;
}

export interface GoogleSecretManagerSecretArgsRotation {
  next_rotation_time?: string;
  rotation_period?: string;
}

export interface GoogleSecretManagerSecretArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSecretManagerSecretArgsTopics {
  name: string;
}

export interface GoogleSecretManagerSecretArgs {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
  secret_id: string;
  ttl?: string;
  version_aliases?: { [key: string]: string };
  version_destroy_ttl?: string;
  replication: GoogleSecretManagerSecretArgsReplication;
  rotation?: GoogleSecretManagerSecretArgsRotation;
  timeouts?: GoogleSecretManagerSecretArgsTimeouts;
  topics?: GoogleSecretManagerSecretArgsTopics[];
}

export class google_secret_manager_secret extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleSecretManagerSecretArgs) {
    const meta = {replication:{isBlock:true,auto:{isBlock:true,customer_managed_encryption:{isBlock:true}},user_managed:{isBlock:true,replicas:{isBlock:true,customer_managed_encryption:{isBlock:true}}}},rotation:{isBlock:true},timeouts:{isBlock:true},topics:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_secret_manager_secret", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get secret_id(): string {
    return `${this.resourceType}.${this.resourceName}.secret_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
