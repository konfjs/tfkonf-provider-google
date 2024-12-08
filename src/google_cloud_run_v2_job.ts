import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2JobArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSourceSecretKeyRef {
  secret: string;
  version: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSource {
  secret_key_ref?: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSourceSecretKeyRef;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersEnv {
  name: string;
  value?: string;
  value_source?: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnvValueSource;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersPorts {
  container_port?: number;
  name?: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersResources {
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainersVolumeMounts {
  mount_path: string;
  name: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateContainers {
  args?: string[];
  command?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env?: GoogleCloudRunV2JobArgsTemplateTemplateContainersEnv[];
  ports?: GoogleCloudRunV2JobArgsTemplateTemplateContainersPorts[];
  resources?: GoogleCloudRunV2JobArgsTemplateTemplateContainersResources;
  volume_mounts?: GoogleCloudRunV2JobArgsTemplateTemplateContainersVolumeMounts[];
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesCloudSqlInstance {
  instances?: string[];
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesGcs {
  bucket: string;
  read_only?: boolean;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesNfs {
  path?: string;
  read_only?: boolean;
  server: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecretItems {
  mode?: number;
  path: string;
  version: string;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecret {
  default_mode?: number;
  secret: string;
  items?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecretItems[];
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVolumes {
  name: string;
  cloud_sql_instance?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesCloudSqlInstance;
  empty_dir?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesEmptyDir;
  gcs?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesGcs;
  nfs?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesNfs;
  secret?: GoogleCloudRunV2JobArgsTemplateTemplateVolumesSecret;
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}

export interface GoogleCloudRunV2JobArgsTemplateTemplateVpcAccess {
  connector?: string;
  network_interfaces?: GoogleCloudRunV2JobArgsTemplateTemplateVpcAccessNetworkInterfaces[];
}

export interface GoogleCloudRunV2JobArgsTemplateTemplate {
  encryption_key?: string;
  max_retries?: number;
  containers?: GoogleCloudRunV2JobArgsTemplateTemplateContainers[];
  volumes?: GoogleCloudRunV2JobArgsTemplateTemplateVolumes[];
  vpc_access?: GoogleCloudRunV2JobArgsTemplateTemplateVpcAccess;
}

export interface GoogleCloudRunV2JobArgsTemplate {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
  template: GoogleCloudRunV2JobArgsTemplateTemplate;
}

export interface GoogleCloudRunV2JobArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudRunV2JobArgs {
  annotations?: { [key: string]: string };
  client?: string;
  client_version?: string;
  deletion_protection?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  binary_authorization?: GoogleCloudRunV2JobArgsBinaryAuthorization;
  template: GoogleCloudRunV2JobArgsTemplate;
  timeouts?: GoogleCloudRunV2JobArgsTimeouts;
}

export class google_cloud_run_v2_job extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudRunV2JobArgs) {
    const meta = {binary_authorization:{isBlock:true},template:{isBlock:true,template:{isBlock:true,containers:{isBlock:true,env:{isBlock:true,value_source:{isBlock:true,secret_key_ref:{isBlock:true}}},ports:{isBlock:true},resources:{isBlock:true},volume_mounts:{isBlock:true}},volumes:{isBlock:true,cloud_sql_instance:{isBlock:true},empty_dir:{isBlock:true},gcs:{isBlock:true},nfs:{isBlock:true},secret:{isBlock:true,items:{isBlock:true}}},vpc_access:{isBlock:true,network_interfaces:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_v2_job", resourceName);
  }

  get conditions(): string {
    return `${this.resourceType}.${this.resourceName}.conditions`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator(): string {
    return `${this.resourceType}.${this.resourceName}.creator`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get execution_count(): string {
    return `${this.resourceType}.${this.resourceName}.execution_count`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get generation(): string {
    return `${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get last_modifier(): string {
    return `${this.resourceType}.${this.resourceName}.last_modifier`;
  }

  get latest_created_execution(): string {
    return `${this.resourceType}.${this.resourceName}.latest_created_execution`;
  }

  get launch_stage(): string {
    return `${this.resourceType}.${this.resourceName}.launch_stage`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get observed_generation(): string {
    return `${this.resourceType}.${this.resourceName}.observed_generation`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get terminal_condition(): string {
    return `${this.resourceType}.${this.resourceName}.terminal_condition`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
